package com.example.demo.Controller;


import com.example.demo.Entity.FileEntity;
import com.example.demo.Repository.FileRepository;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/files")
@CrossOrigin(origins = "http://localhost:5173")
public class FileUploadController {

    private static final Logger logger = LoggerFactory.getLogger(FileUploadController.class);
    private static final String UPLOAD_DIR = "uploads/";

    @Autowired
    private FileRepository fileRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body("Please select a file to upload.");
            }

            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
            Files.write(path, bytes);

            FileEntity fileEntity = new FileEntity();
            fileEntity.setFileName(file.getOriginalFilename());
            fileEntity.setFileType(file.getContentType());
            fileEntity.setFileSize(file.getSize());
            fileEntity.setFilePath(path.toString());
            fileRepository.save(fileEntity);

            return ResponseEntity.ok("File uploaded successfully: " + file.getOriginalFilename());
        } catch (IOException e) {
            logger.error("File upload failed", e);
            return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
        } catch (Exception e) {
            logger.error("An unexpected error occurred", e);
            return ResponseEntity.status(500).body("An unexpected error occurred: " + e.getMessage());
        }
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long id) {
        try {
            FileEntity fileEntity = fileRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("File not found with id " + id));

            Path path = Paths.get(fileEntity.getFilePath());
            Resource resource = new ByteArrayResource(Files.readAllBytes(path));

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(fileEntity.getFileType()))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileEntity.getFileName() + "\"")
                    .body(resource);
        } catch (IOException e) {
            logger.error("File download failed", e);
            return ResponseEntity.status(500).body(null);
        } catch (Exception e) {
            logger.error("An unexpected error occurred", e);
            return ResponseEntity.status(500).body(null);
        }
    }
}
