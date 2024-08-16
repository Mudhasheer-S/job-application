import React, { useState } from 'react';
import CompanyReview from './CompanyReview';
import UserNavBar from './userNavbar';

const companies = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products.',
    link: 'https://www.google.com',
    jobpositions: ['Software Engineer', 'Product Manager', 'Data Scientist'],
    reviews: [
      {
        title: 'Great place to work',
        date: '2024-07-01',
        description: 'Working at Google has been a transformative experience. The company fosters an environment of innovation and creativity, allowing employees to work on cutting-edge projects. The opportunities for career growth and development are exceptional, and the work culture promotes collaboration and forward-thinking. The benefits package is comprehensive, and the work-life balance is well-regarded. Overall, Google is a fantastic place to grow professionally and personally',
        reviewer: 'John Doe',
        rating: 5
      },
      {
        title: 'Challenging but rewarding',
        date: '2024-06-15',
        description: 'The projects are challenging but the rewards are worth it.',
        reviewer: 'Jane Smith',
        rating: 4
      },
      {
        title: 'Very bad company',
        date: '2024-06-15',
        description: 'The projects are challenging but the rewards are worth it.',
        reviewer: 'Parthiban',
        rating: 1
      }
    ]
  },
  {
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    description: 'Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California.',
    link: 'https://www.facebook.com',
    jobpositions: ['Frontend Developer', 'Backend Engineer', 'UX Designer'],
    reviews: [
      {
        title: 'Innovative environment',
        date: '2024-06-20',
        description: 'Great place to work with lots of innovation happening.',
        reviewer: 'Alice Johnson',
        rating: 4
      }
    ]
  },
 
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California.',
    link: 'https://www.apple.com',
    jobpositions: ['Hardware Engineer', 'Software Developer', 'Product Designer'],
    reviews: [
      {
        title: 'Creative and rewarding',
        date: '2024-05-10',
        description: 'A creative and rewarding place to work.',
        reviewer: 'Bob Martin',
        rating: 5
      }
    ]
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington.',
    link: 'https://www.amazon.com',
    jobpositions: ['Warehouse Associate', 'Software Engineer', 'Product Manager'],
    reviews: [
      {
        title: 'Fast-paced and dynamic',
        date: '2024-04-15',
        description: 'A fast-paced and dynamic work environment.',
        reviewer: 'Eve Campbell',
        rating: 4
      }
    ]
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    description: 'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington.',
    link: 'https://www.microsoft.com',
    jobpositions: ['Cloud Engineer', 'Software Developer', 'Data Scientist'],
    reviews: [
      {
        title: 'Great benefits and culture',
        date: '2024-03-25',
        description: 'Great benefits and work culture.',
        reviewer: 'David Lee',
        rating: 4
      }
    ]
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'International Business Machines Corporation (IBM) is an American multinational technology and consulting company.',
    link: 'https://www.ibm.com',
    jobpositions: ['Consultant', 'Software Engineer', 'Systems Analyst'],
    reviews: [
      {
        title: 'Pioneering technology',
        date: '2024-02-10',
        description: 'IBM is a pioneer in technology and a great place to grow your career.',
        reviewer: 'Samuel Adams',
        rating: 4
      }
    ]
  },
  {
    name: 'Intel',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYm0XmspxeJ42dkHamhd41zX6fKOW135ODw&s',
    description: 'Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California.',
    link: 'https://www.intel.com',
    jobpositions: ['Chip Designer', 'Process Engineer', 'Software Developer'],
    reviews: [
      {
        title: 'Innovation at its core',
        date: '2024-01-15',
        description: 'Intel drives innovation and offers great opportunities for engineers.',
        reviewer: 'Emma Wilson',
        rating: 5
      }
    ]
  },
  {
    name: 'Cisco',
    logo: 'https://banner2.cleanpng.com/20180824/ajl/kisspng-logo-product-design-brand-font-sponsors-pycon-australia-august-12th-august-16-5b800852d33386.9068792215351173948651.jpg',
    description: 'Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California.',
    link: 'https://www.cisco.com',
    jobpositions: ['Network Engineer', 'Systems Engineer', 'Technical Support'],
    reviews: [
      {
        title: 'Leader in networking',
        date: '2023-12-20',
        description: 'Cisco is a leader in networking technology with great career growth opportunities.',
        reviewer: 'Olivia Brown',
        rating: 5
      }
    ]
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    description: 'Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas.',
    link: 'https://www.oracle.com',
    jobpositions: ['Database Administrator', 'Software Developer', 'Cloud Engineer'],
    reviews: [
      {
        title: 'Challenging and rewarding',
        date: '2023-11-25',
        description: 'A challenging but rewarding place to work with many opportunities.',
        reviewer: 'Liam Thompson',
        rating: 4
      }
    ]
  },
  {
    name: 'Adobe',
    logo: 'https://banner2.cleanpng.com/20180723/jye/kisspng-logo-brand-adobe-systems-adobe-certified-expert-pdf-adobe-logo-5b5561088899a4.5344268915323220565595.jpg',
    description: 'Adobe Inc. is an American multinational computer software company headquartered in San Jose, California.',
    link: 'https://www.adobe.com',
    jobpositions: ['Software Developer', 'Graphic Designer', 'Product Manager'],
    reviews: [
      {
        title: 'Creative and innovative',
        date: '2023-10-30',
        description: 'Adobe is a creative and innovative company with a great work environment.',
        reviewer: 'Sophia Green',
        rating: 4
      }
    ]
  },
  {
    name: 'Salesforce',
    logo: 'https://image.shutterstock.com/image-photo/image-260nw-2339224663.jpgc',
    description: 'Salesforce.com, Inc. is an American cloud-based software company headquartered in San Francisco, California.',
    link: 'https://www.salesforce.com',
    jobpositions: ['Sales Engineer', 'Account Executive', 'Software Developer'],
    reviews: [
      {
        title: 'Great company culture',
        date: '2023-09-20',
        description: 'Salesforce has a great company culture and offers many growth opportunities.',
        reviewer: 'James White',
        rating: 5
      }
    ]
  },
  {
    name: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    description: 'Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.',
    link: 'https://www.tesla.com',
    jobpositions: ['Mechanical Engineer', 'Software Developer', 'Sales Associate'],
    reviews: [
      {
        title: 'Fast-paced and innovative',
        date: '2023-08-15',
        description: 'Tesla is a fast-paced and innovative company with a lot of exciting projects.',
        reviewer: 'Daniel Harris',
        rating: 4
      }
    ]
  },
  {
    name: 'Twitter',
    logo: 'https://thumbs.dreamstime.com/b/twitter-logo-icon-voronezh-russia-november-round-blue-color-164586139.jpg',
    description: 'Twitter, Inc. is an American social media company based in San Francisco, California.',
    link: 'https://www.twitter.com',
    jobpositions: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    reviews: [
      {
        title: 'Dynamic and engaging',
        date: '2023-07-10',
        description: 'Twitter is a dynamic and engaging place to work with a lot of opportunities.',
        reviewer: 'Amelia Martinez',
        rating: 4
      }
    ]
  },
  {
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    description: 'Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California.',
    link: 'https://www.netflix.com',
    jobpositions: ['Content Creator', 'Software Developer', 'Product Manager'],
    reviews: [
      {
        title: 'Creative and exciting',
        date: '2023-06-05',
        description: 'Netflix is a creative and exciting place to work with many opportunities.',
        reviewer: 'Isabella Clark',
        rating: 5
      }
    ]
  },
  {
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    description: 'Spotify Technology S.A. is a Swedish audio streaming and media services provider.',
    link: 'https://www.spotify.com',
    jobpositions: ['Software Engineer', 'Product Manager', 'Data Scientist'],
    reviews: [
      {
        title: 'Innovative and fun',
        date: '2023-05-01',
        description: 'Spotify is an innovative and fun place to work with great benefits.',
        reviewer: 'Lucas Walker',
        rating: 4
      }
    ]
  },
  {
    name: 'Shopify',
    logo: 'https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png',
    description: 'Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario.',
    link: 'https://www.shopify.com',
    jobpositions: ['Software Developer', 'Product Manager', 'Data Scientist'],
    reviews: [
      {
        title: 'Supportive and innovative',
        date: '2023-04-10',
        description: 'Shopify offers a supportive and innovative work environment.',
        reviewer: 'Grace Lopez',
        rating: 4
      }
    ]
  },
  {
    name: 'Slack',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNVft0DYu4Oi5sh_6_1-sU49H6pDHyKXJFbA&s',
    description: 'Slack Technologies, LLC is an American software company founded in 2009 in Vancouver, British Columbia.',
    link: 'https://www.slack.com',
    jobpositions: ['Software Developer', 'Product Manager', 'Customer Support'],
    reviews: [
      {
        title: 'Collaborative and flexible',
        date: '2023-03-05',
        description: 'Slack is a collaborative and flexible place to work with great opportunities.',
        reviewer: 'Michael King',
        rating: 4
      }
    ]
  },
  {
    name: 'Uber',
    logo: 'https://images.livemint.com/img/2019/10/04/600x338/2019-09-16T205607Z_1_LYNXMPEF8F1OH_RTROPTP_3_UBER-NEW-YORK_1568893470233_1570189175345.JPG',
    description: 'Uber Technologies, Inc. is an American technology company based in San Francisco, California.',
    link: 'https://www.uber.com',
    jobpositions: ['Driver', 'Software Developer', 'Product Manager'],
    reviews: [
      {
        title: 'Dynamic and challenging',
        date: '2023-02-10',
        description: 'Uber offers a dynamic and challenging work environment with many opportunities.',
        reviewer: 'Aiden Hernandez',
        rating: 3
      }
    ]
  },
  {
    name: 'Dropbox',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cUyVhM7gSOUBGj-eqXwhemUgUJgTTK9m0A&s',
    description: 'Dropbox, Inc. is an American file hosting service operated by the American company Dropbox, Inc.',
    link: 'https://www.dropbox.com',
    jobpositions: ['Software Developer', 'Product Manager', 'Data Scientist'],
    reviews: [
      {
        title: 'Supportive and innovative',
        date: '2023-01-05',
        description: 'Dropbox offers a supportive and innovative work environment with great benefits.',
        reviewer: 'Abigail Young',
        rating: 4
      }
    ]
  },
  {
    name: 'LinkedIn',
    logo: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png',
    description: 'LinkedIn Corporation is an American business and employment-oriented online service that operates via websites and mobile apps.',
    link: 'https://www.linkedin.com',
    jobpositions: ['Sales Executive', 'Software Developer', 'Data Scientist'],
    reviews: [
      {
        title: 'Professional and growth-oriented',
        date: '2024-01-15',
        description: 'LinkedIn is a professional environment with ample growth opportunities.',
        reviewer: 'Chris Evans',
        rating: 5
      }
    ]
  }
];

const Companies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseDetails = () => {
    setSelectedCompany(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(searchTerm);
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
    return total / reviews.length;
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = {
    companiesContainer: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
    searchBarContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '20px',
    },
    searchBar: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '600px',
      fontSize: '16px',
    },
    searchButton: {
      padding: '10px 25px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    searchButtonHover: {
      backgroundColor: '#0056b3',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    companyCard: {
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    companyCardHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    },
    companyLogo: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      marginBottom: '15px',
    },
    companyName: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '10px',
    },
    companyDescription: {
      fontSize: '14px',
      color: '#555',
    },
  };

  return (
    <>
      <UserNavBar />
      <div style={styles.companiesContainer}>
        {!selectedCompany && (
          <div style={styles.searchBarContainer}>
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchBar}
            />
            <button
              onClick={handleSearchSubmit}
              style={styles.searchButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.searchButtonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.searchButton.backgroundColor)}
            >
              Search
            </button>
          </div>
        )}
        {selectedCompany ? (
          <CompanyReview company={selectedCompany} onClose={handleCloseDetails} />
        ) : (
          <div style={styles.gridContainer}>
            {filteredCompanies.map((company, index) => (
              <div
                key={index}
                style={styles.companyCard}
                onClick={() => handleCompanyClick(company)}
                onMouseOver={(e) => (e.currentTarget.style.transform = styles.companyCardHover.transform)}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img src={company.logo} alt={company.name} style={styles.companyLogo} />
                <h3 style={styles.companyName}>{company.name}</h3>
                <p style={styles.companyDescription}>{company.description}</p>
                {/* <StarRating rating={calculateAverageRating(company.reviews)} /> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Companies;
