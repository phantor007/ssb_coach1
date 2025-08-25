// SSB Coach Application JavaScript

// Application data
const appData = {
  "site_info": {
    "name": "SSB Coach",
    "domain": "ssbcoach.in",
    "tagline": "Your Gateway to Defence Excellence",
    "description": "India's premier platform for SSB interview preparation, coaching, and guidance"
  },
  
  "ssb_info": {
    "about": "The Service Selection Board (SSB) interview is a comprehensive 5-day selection process conducted by the Indian Armed Forces to evaluate candidates for officer-level positions. The process includes screening tests, psychological evaluations, group tasks, personal interviews, and a final conference.",
    "stages": [
      {
        "stage": "Stage 1 - Screening",
        "duration": "Day 1",
        "tests": ["Officer Intelligence Rating (OIR)", "Picture Perception & Discussion Test (PPDT)"],
        "description": "Initial screening to filter potential candidates"
      },
      {
        "stage": "Stage 2 - Psychology",
        "duration": "Day 2",
        "tests": ["Thematic Apperception Test (TAT)", "Word Association Test (WAT)", "Situation Reaction Test (SRT)", "Self Description (SD)"],
        "description": "Psychological assessment to evaluate personality traits"
      },
      {
        "stage": "Stage 2 - GTO Tasks",
        "duration": "Day 3-4",
        "tests": ["Group Discussion", "Group Planning Exercise", "Progressive Group Task", "Group Obstacle Race", "Individual Obstacles", "Command Task", "Snake Race", "Final Group Task"],
        "description": "Group Testing Officer evaluates leadership and teamwork skills"
      },
      {
        "stage": "Stage 2 - Personal Interview", 
        "duration": "Day 2-4",
        "tests": ["Personal Interview with Interviewing Officer"],
        "description": "One-on-one interview to assess Officer Like Qualities"
      },
      {
        "stage": "Conference",
        "duration": "Day 5",
        "tests": ["Final Board Conference"],
        "description": "Final evaluation by all assessors to make recommendation decision"
      }
    ],
    "olq": [
      "Effective Intelligence", "Reasoning Ability", "Organizing Ability", 
      "Power of Expression", "Social Adaptability", "Cooperation", 
      "Sense of Responsibility", "Initiative", "Self Confidence", 
      "Speed of Decision", "Ability to Influence the Group", "Liveliness",
      "Determination", "Courage", "Stamina"
    ]
  },
  
  "coaches": [
    {
      "id": 1,
      "name": "Col. Rajesh Kumar",
      "experience": "15 years",
      "specialty": "Psychology & GTO Training",
      "rating": 4.8,
      "reviews_count": 125,
      "success_rate": "85%",
      "location": "Delhi",
      "charges": "₹25,000 for 21-day course",
      "phone": "+91-9876543210",
      "email": "rajesh.kumar@ssbcoach.in",
      "sponsored": true,
      "image": "col_rajesh.jpg",
      "bio": "Retired Army Colonel with extensive SSB assessment experience. Specialized in psychological evaluation and GTO task training.",
      "qualifications": ["M.A. Psychology", "Defence Services Staff College", "DIPR Trained Assessor"],
      "recent_reviews": [
        {"student": "Rahul S.", "rating": 5, "text": "Excellent guidance for psychology tests. Got recommended in first attempt!", "date": "2025-08-15"},
        {"student": "Priya M.", "rating": 5, "text": "Best GTO training in Delhi. Highly recommended!", "date": "2025-08-10"}
      ]
    },
    {
      "id": 2,
      "name": "Maj. Anita Sharma",
      "experience": "12 years",
      "specialty": "Personal Interview & Communication Skills",
      "rating": 4.7,
      "reviews_count": 98,
      "success_rate": "82%",
      "location": "Mumbai",
      "charges": "₹22,000 for 21-day course",
      "phone": "+91-9876543211",
      "email": "anita.sharma@ssbcoach.in",
      "sponsored": false,
      "image": "maj_anita.jpg",
      "bio": "Former Air Force Officer specializing in personality development and interview techniques.",
      "qualifications": ["M.A. English", "Air Force Academy", "Communication Skills Trainer"],
      "recent_reviews": [
        {"student": "Vikram K.", "rating": 5, "text": "Improved my confidence significantly. Great interview prep!", "date": "2025-08-12"},
        {"student": "Sneha R.", "rating": 4, "text": "Very professional approach. Helped me overcome my fears.", "date": "2025-08-08"}
      ]
    },
    {
      "id": 3,
      "name": "Lt. Col. Suresh Menon",
      "experience": "18 years", 
      "specialty": "Screening Tests & OIR",
      "rating": 4.9,
      "reviews_count": 156,
      "success_rate": "88%",
      "location": "Bangalore",
      "charges": "₹28,000 for 21-day course",
      "phone": "+91-9876543212",
      "email": "suresh.menon@ssbcoach.in",
      "sponsored": true,
      "image": "ltcol_suresh.jpg",
      "bio": "Expert in screening tests and intelligence rating. Former SSB assessor with proven track record.",
      "qualifications": ["M.Sc. Mathematics", "Staff College", "Former SSB Assessor"],
      "recent_reviews": [
        {"student": "Arjun P.", "rating": 5, "text": "Cleared screening in first attempt thanks to his OIR training!", "date": "2025-08-18"},
        {"student": "Kavya L.", "rating": 5, "text": "Excellent teaching methodology. Highly systematic approach.", "date": "2025-08-14"}
      ]
    },
    {
      "id": 4,
      "name": "Capt. Ravi Tiwari",
      "experience": "10 years",
      "specialty": "Group Tasks & Leadership Training",
      "rating": 4.6,
      "reviews_count": 87,
      "success_rate": "79%",
      "location": "Lucknow",
      "charges": "₹20,000 for 21-day course",
      "phone": "+91-9876543213",
      "email": "ravi.tiwari@ssbcoach.in",
      "sponsored": false,
      "image": "capt_ravi.jpg",
      "bio": "Former Navy Officer with expertise in group dynamics and leadership development.",
      "qualifications": ["B.Tech Mechanical", "Naval Academy", "Leadership Trainer"],
      "recent_reviews": [
        {"student": "Manish A.", "rating": 5, "text": "Great group task training. Learned valuable leadership skills.", "date": "2025-08-16"},
        {"student": "Pooja K.", "rating": 4, "text": "Good practical approach to GTO tasks.", "date": "2025-08-11"}
      ]
    },
    {
      "id": 5,
      "name": "Maj. Deepak Singh",
      "experience": "14 years",
      "specialty": "Complete SSB Preparation",
      "rating": 4.5,
      "reviews_count": 103,
      "success_rate": "81%",
      "location": "Pune",
      "charges": "₹26,000 for 21-day course",
      "phone": "+91-9876543214",
      "email": "deepak.singh@ssbcoach.in",
      "sponsored": false,
      "image": "maj_deepak.jpg",
      "bio": "Comprehensive SSB training expert with holistic approach to personality development.",
      "qualifications": ["M.A. Defence Studies", "Military Academy", "Personality Development Expert"],
      "recent_reviews": [
        {"student": "Rohit M.", "rating": 4, "text": "Comprehensive training program. Good overall preparation.", "date": "2025-08-13"},
        {"student": "Anushka S.", "rating": 5, "text": "Excellent guidance throughout the entire SSB process.", "date": "2025-08-09"}
      ]
    }
  ],
  
  "ssb_centers": [
    {
      "id": 1,
      "name": "1 AFSB Dehradun",
      "service": "Indian Air Force",
      "location": "Dehradun, Uttarakhand",
      "address": "Air Force Selection Board, Clement Town, Dehradun - 248002",
      "phone": "+91-135-2755431",
      "email": "1afsb@indianairforce.nic.in",
      "difficulty_rating": 4.2,
      "reviews_count": 245,
      "sponsored_review": true,
      "facilities": ["Accommodation", "Mess", "Medical Facility", "Sports Ground", "Library"],
      "nearby_amenities": ["Railway Station (8 km)", "Airport (25 km)", "Bus Stand (6 km)"],
      "recent_reviews": [
        {"candidate": "Akash P.", "rating": 4, "text": "Well-organized process. Fair assessment. Got recommended!", "date": "2025-08-20", "entry": "NDA"},
        {"candidate": "Shreya K.", "rating": 5, "text": "Excellent facilities and professional staff.", "date": "2025-08-18", "entry": "AFCAT"},
        {"candidate": "Rohit S.", "rating": 3, "text": "Tough competition but fair evaluation.", "date": "2025-08-15", "entry": "CDS"}
      ]
    },
    {
      "id": 2,
      "name": "2 AFSB Mysore",
      "service": "Indian Air Force",
      "location": "Mysore, Karnataka",
      "address": "Air Force Selection Board, Mysore - 570011",
      "phone": "+91-821-2425967",
      "email": "2afsb@indianairforce.nic.in",
      "difficulty_rating": 4.5,
      "reviews_count": 198,
      "sponsored_review": false,
      "facilities": ["Accommodation", "Mess", "Medical Facility", "Gymnasium", "Recreation Room"],
      "nearby_amenities": ["Railway Station (4 km)", "Airport (12 km)", "Bus Stand (3 km)"],
      "recent_reviews": [
        {"candidate": "Vijay R.", "rating": 4, "text": "Very systematic process. Assessors were fair.", "date": "2025-08-19", "entry": "AFCAT"},
        {"candidate": "Meera L.", "rating": 5, "text": "Great experience overall. Recommended successfully!", "date": "2025-08-17", "entry": "NDA"},
        {"candidate": "Kiran M.", "rating": 4, "text": "Challenging but rewarding experience.", "date": "2025-08-14", "entry": "CDS"}
      ]
    },
    {
      "id": 3,
      "name": "SSB Allahabad",
      "service": "Indian Army",
      "location": "Allahabad, Uttar Pradesh",
      "address": "Service Selection Board, Allahabad Cantonment - 211001",
      "phone": "+91-532-2412345",
      "email": "ssballahabad@indianarmy.nic.in",
      "difficulty_rating": 3.8,
      "reviews_count": 312,
      "sponsored_review": true,
      "facilities": ["Accommodation", "Mess", "Medical Center", "Sports Complex", "Library"],
      "nearby_amenities": ["Railway Station (5 km)", "Airport (15 km)", "Bus Stand (4 km)"],
      "recent_reviews": [
        {"candidate": "Amit K.", "rating": 4, "text": "Good facilities. Fair assessment process.", "date": "2025-08-21", "entry": "CDS"},
        {"candidate": "Priyanka S.", "rating": 3, "text": "Average experience. Could be better organized.", "date": "2025-08-16", "entry": "OTA"},
        {"candidate": "Suresh T.", "rating": 5, "text": "Excellent experience. Got recommended for IMA!", "date": "2025-08-12", "entry": "NDA"}
      ]
    },
    {
      "id": 4,
      "name": "NSB Coimbatore",
      "service": "Indian Navy",
      "location": "Coimbatore, Tamil Nadu",
      "address": "Naval Selection Board, Coimbatore - 641001",
      "phone": "+91-422-2325957",
      "email": "nsbcoimbatore@indiannavy.nic.in",
      "difficulty_rating": 4.1,
      "reviews_count": 167,
      "sponsored_review": false,
      "facilities": ["Accommodation", "Mess", "Medical Facility", "Swimming Pool", "Gym"],
      "nearby_amenities": ["Railway Station (3 km)", "Airport (11 km)", "Bus Stand (2 km)"],
      "recent_reviews": [
        {"candidate": "Naveen R.", "rating": 5, "text": "Professional environment. Highly satisfied with the process.", "date": "2025-08-22", "entry": "Navy UES"},
        {"candidate": "Divya M.", "rating": 4, "text": "Good facilities and courteous staff.", "date": "2025-08-18", "entry": "Navy SSC"},
        {"candidate": "Rajesh P.", "rating": 4, "text": "Well-conducted interviews. Fair evaluation.", "date": "2025-08-13", "entry": "CDS"}
      ]
    },
    {
      "id": 5,
      "name": "SSB Kapurthala",
      "service": "Indian Army",
      "location": "Kapurthala, Punjab",
      "address": "Service Selection Board, Kapurthala - 144601",
      "phone": "+91-1822-225544",
      "email": "ssbkapurthala@indianarmy.nic.in",
      "difficulty_rating": 3.9,
      "reviews_count": 223,
      "sponsored_review": false,
      "facilities": ["Accommodation", "Mess", "Medical Facility", "Sports Ground", "Canteen"],
      "nearby_amenities": ["Railway Station (2 km)", "Airport (45 km)", "Bus Stand (1 km)"],
      "recent_reviews": [
        {"candidate": "Gurpreet S.", "rating": 4, "text": "Good experience overall. Professional assessment.", "date": "2025-08-20", "entry": "TGC"},
        {"candidate": "Simran K.", "rating": 5, "text": "Excellent facilities and supportive staff.", "date": "2025-08-15", "entry": "JAG"},
        {"candidate": "Harpreet L.", "rating": 3, "text": "Average facilities but fair evaluation process.", "date": "2025-08-11", "entry": "CDS"}
      ]
    }
  ],
  
  "blogs": [
    {
      "id": 1,
      "title": "Complete Guide to SSB Interview: Everything You Need to Know",
      "excerpt": "A comprehensive guide covering all aspects of the SSB interview process, from screening to conference.",
      "content": "The Service Selection Board (SSB) interview is the gateway to joining the Indian Armed Forces as an officer. This comprehensive guide will walk you through every stage of the 5-day process...",
      "author": "Col. Rajesh Kumar",
      "date": "2025-08-20",
      "category": "SSB Preparation",
      "tags": ["SSB", "Interview", "Preparation", "Defence"],
      "featured": true,
      "read_time": "12 min read",
      "views": 15420
    },
    {
      "id": 2,
      "title": "Top 10 Mistakes to Avoid in SSB Interview",
      "excerpt": "Learn about the common mistakes that candidates make during SSB interviews and how to avoid them.",
      "content": "Many candidates fail in SSB interviews due to avoidable mistakes. Here are the top 10 mistakes you should avoid to increase your chances of success...",
      "author": "Maj. Anita Sharma",
      "date": "2025-08-18",
      "category": "Tips & Tricks",
      "tags": ["SSB", "Mistakes", "Tips", "Success"],
      "featured": true,
      "read_time": "8 min read",
      "views": 12350
    },
    {
      "id": 3,
      "title": "Psychology Tests in SSB: TAT, WAT, SRT and SD Explained",
      "excerpt": "Detailed explanation of psychological tests in SSB interview with tips and sample responses.",
      "content": "Psychology tests form a crucial part of the SSB interview. Understanding TAT, WAT, SRT, and SD tests is essential for success...",
      "author": "Lt. Col. Suresh Menon",
      "date": "2025-08-16",
      "category": "Psychology Tests",
      "tags": ["Psychology", "TAT", "WAT", "SRT", "SD"],
      "featured": true,
      "read_time": "15 min read",
      "views": 18750
    },
    {
      "id": 4,
      "title": "GTO Tasks: Mastering Group Testing Officer Challenges",
      "excerpt": "Complete guide to GTO tasks including group discussions, planning exercises, and obstacle races.",
      "content": "The Group Testing Officer (GTO) evaluates your leadership and teamwork skills through various outdoor and indoor tasks...",
      "author": "Capt. Ravi Tiwari",
      "date": "2025-08-14",
      "category": "GTO Tasks",
      "tags": ["GTO", "Leadership", "Teamwork", "Group Tasks"],
      "featured": false,
      "read_time": "10 min read",
      "views": 9840
    },
    {
      "id": 5,
      "title": "Officer Like Qualities (OLQ): What SSB Assessors Look For",
      "excerpt": "Understanding the 15 Officer Like Qualities that form the foundation of SSB assessment.",
      "content": "Officer Like Qualities (OLQ) are the fundamental traits that SSB assessors evaluate in every candidate...",
      "author": "Maj. Deepak Singh",
      "date": "2025-08-12",
      "category": "OLQ",
      "tags": ["OLQ", "Assessment", "Leadership", "Character"],
      "featured": false,
      "read_time": "9 min read",
      "views": 11200
    }
  ],
  
  "practice_tests": {
    "oir": {
      "name": "Officer Intelligence Rating",
      "description": "Test your verbal and non-verbal reasoning abilities",
      "duration": "30 minutes",
      "questions": 50,
      "difficulty": "Medium",
      "topics": ["Analogies", "Series Completion", "Hidden Figures", "Logical Venn Diagrams", "Coding-Decoding"]
    },
    "ppdt": {
      "name": "Picture Perception & Discussion Test",
      "description": "Develop story writing and group discussion skills",
      "duration": "45 minutes",
      "questions": "Story + Discussion",
      "difficulty": "Medium",
      "topics": ["Story Writing", "Group Discussion", "Perception", "Communication"]
    },
    "psychology": {
      "name": "Psychological Tests",
      "description": "Practice TAT, WAT, SRT and Self Description",
      "duration": "3 hours",
      "questions": "Variable",
      "difficulty": "High",
      "topics": ["TAT", "WAT", "SRT", "Self Description"]
    },
    "gto": {
      "name": "Group Testing Officer Tasks",
      "description": "Leadership and teamwork assessment",
      "duration": "2 days",
      "questions": "Practical Tasks",
      "difficulty": "High",
      "topics": ["Group Discussion", "Group Planning", "Progressive Group Task", "Command Task"]
    },
    "interview": {
      "name": "Personal Interview",
      "description": "Mock personal interview preparation",
      "duration": "45-60 minutes",
      "questions": "Variable",
      "difficulty": "High",
      "topics": ["Personal Questions", "Current Affairs", "Technical Questions", "Situational Questions"]
    }
  },
  
  "testimonials": [
    {
      "name": "Arjun Mehta",
      "rank": "Lieutenant",
      "service": "Indian Army",
      "photo": "arjun_mehta.jpg",
      "text": "SSBCoach.in was instrumental in my success. The comprehensive guidance and practice tests helped me clear SSB in my first attempt.",
      "rating": 5,
      "date": "2025-08-15"
    },
    {
      "name": "Priya Sharma",
      "rank": "Flying Officer",
      "service": "Indian Air Force",
      "photo": "priya_sharma.jpg",
      "text": "The psychology test preparation was excellent. The coaches here understand what assessors look for.",
      "rating": 5,
      "date": "2025-08-10"
    },
    {
      "name": "Vikram Singh",
      "rank": "Sub Lieutenant",
      "service": "Indian Navy",
      "photo": "vikram_singh.jpg",
      "text": "Best SSB coaching platform in India. Highly recommend for all defence aspirants.",
      "rating": 5,
      "date": "2025-08-05"
    }
  ]
};

// Application state
let currentUser = null;
let currentPage = 'home';
let currentRating = 0;
let currentReviewTarget = null;

// DOM elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav__link');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const userMenu = document.getElementById('userMenu');
const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadFeaturedContent();
});

// Initialize application
function initializeApp() {
    // Check for stored user session
    const storedUser = sessionStorage.getItem('ssbcoach_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateAuthUI();
    }
    
    // Set initial page
    showPage('home');
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href').substring(1);
            showPage(page);
        });
    });
    
    // Auth buttons
    loginBtn.addEventListener('click', () => showLoginModal());
    registerBtn.addEventListener('click', () => showPage('register'));
    logoutBtn.addEventListener('click', () => logout());
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const navList = document.querySelector('.nav__list');
            navList.classList.toggle('active');
        });
    }
    
    // Forms
    setupFormListeners();
    
    // Filters
    setupFilterListeners();
    
    // Star rating
    setupStarRating();
    
    // Modal close events
    setupModalEvents();
}

// Show page
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('page--active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('page--active');
        currentPage = pageId;
        
        // Update navigation
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[href="#${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Load page content
        loadPageContent(pageId);
    }
}

// Load page content
function loadPageContent(pageId) {
    switch(pageId) {
        case 'coaches':
            loadCoaches();
            break;
        case 'centers':
            loadCenters();
            break;
        case 'practice':
            loadPracticeTests();
            break;
        case 'blogs':
            loadAllBlogs();
            break;
    }
}

// Load featured content for home page
function loadFeaturedContent() {
    loadFeaturedBlogs();
    loadTestimonials();
}

// Load featured blogs
function loadFeaturedBlogs() {
    const container = document.getElementById('featuredBlogs');
    if (!container) return;
    
    const featuredBlogs = appData.blogs.filter(blog => blog.featured).slice(0, 3);
    
    container.innerHTML = featuredBlogs.map(blog => `
        <article class="blog-card">
            <h3>${blog.title}</h3>
            <div class="blog-meta">
                <span>By ${blog.author}</span>
                <span>${blog.date}</span>
                <span>${blog.read_time}</span>
            </div>
            <p class="blog-excerpt">${blog.excerpt}</p>
            <div class="card-actions">
                <button class="btn btn--outline btn--sm" onclick="readBlog(${blog.id})">Read More</button>
            </div>
        </article>
    `).join('');
}

// Load testimonials
function loadTestimonials() {
    const container = document.getElementById('testimonialsList');
    if (!container) return;
    
    container.innerHTML = appData.testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="star-rating">
                ${generateStars(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <strong>${testimonial.name}</strong>
                <span>${testimonial.rank}, ${testimonial.service}</span>
            </div>
        </div>
    `).join('');
}

// Load coaches
function loadCoaches() {
    const container = document.getElementById('coachesList');
    if (!container) return;
    
    let coaches = [...appData.coaches];
    
    // Apply filters
    const sortBy = document.getElementById('coachSort')?.value || 'rating';
    const locationFilter = document.getElementById('locationFilter')?.value || '';
    
    if (locationFilter) {
        coaches = coaches.filter(coach => coach.location === locationFilter);
    }
    
    // Sort coaches
    coaches.sort((a, b) => {
        switch(sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'experience':
                return parseInt(b.experience) - parseInt(a.experience);
            case 'location':
                return a.location.localeCompare(b.location);
            case 'charges':
                return parseFloat(a.charges.replace(/[^\d]/g, '')) - parseFloat(b.charges.replace(/[^\d]/g, ''));
            default:
                return 0;
        }
    });
    
    // Sort sponsored coaches to top
    coaches.sort((a, b) => b.sponsored - a.sponsored);
    
    container.innerHTML = coaches.map(coach => `
        <div class="coach-card">
            ${coach.sponsored ? '<div class="sponsored-badge">Sponsored</div>' : ''}
            <h3>${coach.name}</h3>
            <div class="coach-meta">
                <span>${coach.experience} experience</span>
                <span>${coach.location}</span>
                <span>Success Rate: ${coach.success_rate}</span>
            </div>
            <div class="star-rating">
                ${generateStars(coach.rating, 'gold')}
                <span>(${coach.reviews_count} reviews)</span>
            </div>
            <p class="coach-bio">${coach.bio}</p>
            <div class="coach-specialty">
                <strong>Specialty:</strong> ${coach.specialty}
            </div>
            
            ${currentUser && currentUser.subscribed ? `
                <div class="contact-details">
                    <p><strong>Phone:</strong> ${coach.phone}</p>
                    <p><strong>Email:</strong> ${coach.email}</p>
                    <p><strong>Charges:</strong> ${coach.charges}</p>
                </div>
            ` : `
                <div class="contact-overlay">
                    <h4>Premium Content</h4>
                    <p>Subscribe to view contact details and charges</p>
                    <button class="btn btn--primary btn--sm" onclick="showSubscriptionModal()">Subscribe Now</button>
                </div>
            `}
            
            <div class="card-actions">
                ${currentUser ? `
                    <button class="btn btn--outline btn--sm" onclick="writeReview('coach', ${coach.id})">Write Review</button>
                ` : ''}
                <button class="btn btn--secondary btn--sm" onclick="showContactModal()">Contact Coach</button>
            </div>
            
            <div class="reviews-list">
                ${coach.recent_reviews.slice(0, 2).map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-author">${review.student}</span>
                            <span class="review-date">${review.date}</span>
                        </div>
                        <div class="star-rating">
                            ${generateStars(review.rating, 'gold')}
                        </div>
                        <p class="review-text">${review.text}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Load centers
function loadCenters() {
    const container = document.getElementById('centersList');
    if (!container) return;
    
    let centers = [...appData.ssb_centers];
    
    // Apply filters
    const sortBy = document.getElementById('centerSort')?.value || 'rating';
    const serviceFilter = document.getElementById('serviceFilter')?.value || '';
    
    if (serviceFilter) {
        centers = centers.filter(center => center.service === serviceFilter);
    }
    
    // Sort centers
    centers.sort((a, b) => {
        switch(sortBy) {
            case 'rating':
                return b.difficulty_rating - a.difficulty_rating;
            case 'reviews':
                return b.reviews_count - a.reviews_count;
            case 'service':
                return a.service.localeCompare(b.service);
            default:
                return 0;
        }
    });
    
    // Sort sponsored reviews to top
    centers.sort((a, b) => b.sponsored_review - a.sponsored_review);
    
    container.innerHTML = centers.map(center => `
        <div class="center-card">
            ${center.sponsored_review ? '<div class="sponsored-badge">Sponsored Review</div>' : ''}
            <h3>${center.name}</h3>
            <div class="center-meta">
                <span>${center.service}</span>
                <span>${center.location}</span>
                <span>${center.reviews_count} reviews</span>
            </div>
            <div class="star-rating">
                ${generateStars(center.difficulty_rating, 'red')}
                <span>Difficulty Rating</span>
            </div>
            
            <div class="center-facilities">
                <strong>Facilities:</strong>
                <ul>
                    ${center.facilities.map(facility => `<li>${facility}</li>`).join('')}
                </ul>
            </div>
            
            ${currentUser && currentUser.subscribed ? `
                <div class="contact-details">
                    <p><strong>Address:</strong> ${center.address}</p>
                    <p><strong>Phone:</strong> ${center.phone}</p>
                    <p><strong>Email:</strong> ${center.email}</p>
                </div>
            ` : `
                <div class="contact-overlay">
                    <h4>Premium Content</h4>
                    <p>Subscribe to view detailed location and contact information</p>
                    <button class="btn btn--primary btn--sm" onclick="showSubscriptionModal()">Subscribe Now</button>
                </div>
            `}
            
            <div class="card-actions">
                ${currentUser ? `
                    <button class="btn btn--outline btn--sm" onclick="writeReview('center', ${center.id})">Write Review</button>
                ` : ''}
                <button class="btn btn--secondary btn--sm" onclick="showContactModal()">Contact Consultant</button>
            </div>
            
            <div class="reviews-list">
                ${center.recent_reviews.slice(0, 2).map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="review-author">${review.candidate}</span>
                            <span class="review-date">${review.date}</span>
                        </div>
                        <div class="star-rating">
                            ${generateStars(review.rating, 'red')}
                        </div>
                        <p class="review-text">${review.text}</p>
                        <span class="review-entry">Entry: ${review.entry}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Load practice tests
function loadPracticeTests() {
    const container = document.getElementById('practiceTestsList');
    if (!container) return;
    
    const tests = Object.entries(appData.practice_tests);
    
    container.innerHTML = tests.map(([key, test]) => `
        <div class="test-card">
            <h3>${test.name}</h3>
            <div class="test-meta">
                <span>Duration: ${test.duration}</span>
                <span>Questions: ${test.questions}</span>
                <span>Difficulty: ${test.difficulty}</span>
            </div>
            <p class="test-description">${test.description}</p>
            <div class="test-topics">
                <strong>Topics:</strong>
                <ul>
                    ${test.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
            
            ${currentUser && currentUser.subscribed ? `
                <button class="btn btn--primary btn--full-width" onclick="startTest('${key}')">Start Practice Test</button>
            ` : `
                <div class="contact-overlay">
                    <h4>Premium Content</h4>
                    <p>Subscribe to access all practice tests</p>
                    <button class="btn btn--primary btn--full-width" onclick="showSubscriptionModal()">Subscribe to Access</button>
                </div>
            `}
        </div>
    `).join('');
}

// Load all blogs
function loadAllBlogs() {
    const container = document.getElementById('allBlogsList');
    if (!container) return;
    
    container.innerHTML = appData.blogs.map(blog => `
        <article class="blog-card">
            <h3>${blog.title}</h3>
            <div class="blog-meta">
                <span>By ${blog.author}</span>
                <span>${blog.date}</span>
                <span>${blog.read_time}</span>
                <span>${blog.views} views</span>
            </div>
            <p class="blog-excerpt">${blog.excerpt}</p>
            <div class="blog-tags">
                ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="card-actions">
                <button class="btn btn--outline btn--sm" onclick="readBlog(${blog.id})">Read More</button>
            </div>
        </article>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating, type = 'gold') {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += `<span class="star active ${type}">★</span>`;
    }
    
    // Half star
    if (halfStar) {
        starsHtml += `<span class="star half ${type}">★</span>`;
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += `<span class="star ${type}">★</span>`;
    }
    
    return starsHtml;
}

// Authentication functions
function showLoginModal() {
    showModal('loginModal');
}

function updateAuthUI() {
    if (currentUser) {
        document.querySelectorAll('.auth-btn').forEach(btn => btn.classList.add('hidden'));
        userMenu.classList.remove('hidden');
        userName.textContent = currentUser.name;
    } else {
        document.querySelectorAll('.auth-btn').forEach(btn => btn.classList.remove('hidden'));
        userMenu.classList.add('hidden');
    }
}

function logout() {
    currentUser = null;
    sessionStorage.removeItem('ssbcoach_user');
    updateAuthUI();
    showMessage('Logged out successfully', 'success');
    showPage('home');
}

// Form handling
function setupFormListeners() {
    // Registration form
    const regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', handleRegistration);
    }
    
    // Teacher registration form
    const teacherForm = document.getElementById('teacherRegistrationForm');
    if (teacherForm) {
        teacherForm.addEventListener('submit', handleTeacherRegistration);
    }
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContact);
    }
    
    // Review form
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmission);
    }
}

function handleRegistration(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    const userData = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        accountType: document.getElementById('regAccountType').value,
        subscribed: false,
        registeredAt: new Date().toISOString()
    };
    
    // Simulate registration
    currentUser = userData;
    sessionStorage.setItem('ssbcoach_user', JSON.stringify(currentUser));
    updateAuthUI();
    
    showMessage('Registration successful! Welcome to SSB Coach.', 'success');
    showPage('home');
}

function handleTeacherRegistration(e) {
    e.preventDefault();
    
    const teacherData = {
        name: document.getElementById('teacherName').value,
        email: document.getElementById('teacherEmail').value,
        phone: document.getElementById('teacherPhone').value,
        experience: document.getElementById('teacherExperience').value,
        specialty: document.getElementById('teacherSpecialty').value,
        location: document.getElementById('teacherLocation').value,
        charges: document.getElementById('teacherCharges').value,
        qualifications: document.getElementById('teacherQualifications').value,
        bio: document.getElementById('teacherBio').value,
        submittedAt: new Date().toISOString()
    };
    
    showMessage('Teacher registration submitted for review. We will contact you within 2-3 business days.', 'success');
    e.target.reset();
    showPage('home');
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login - in real app, this would authenticate with backend
    const userData = {
        name: email.split('@')[0],
        email: email,
        subscribed: Math.random() > 0.5, // Random subscription status for demo
        accountType: 'student',
        loginAt: new Date().toISOString()
    };
    
    currentUser = userData;
    sessionStorage.setItem('ssbcoach_user', JSON.stringify(currentUser));
    updateAuthUI();
    
    closeModal('loginModal');
    showMessage('Login successful!', 'success');
    
    // Refresh current page to show subscribed content
    loadPageContent(currentPage);
}

function handleContact(e) {
    e.preventDefault();
    
    showMessage('Message sent successfully! Our consultant will contact you within 24 hours.', 'success');
    closeModal('contactModal');
    e.target.reset();
}

function handleReviewSubmission(e) {
    e.preventDefault();
    
    if (!currentUser) {
        showMessage('Please login to submit a review', 'error');
        return;
    }
    
    const reviewText = document.getElementById('reviewText').value;
    
    if (currentRating === 0) {
        showMessage('Please select a rating', 'error');
        return;
    }
    
    showMessage('Review submitted successfully!', 'success');
    closeModal('reviewModal');
    e.target.reset();
    currentRating = 0;
    updateStarDisplay();
}

// Filter handling
function setupFilterListeners() {
    const coachSort = document.getElementById('coachSort');
    const locationFilter = document.getElementById('locationFilter');
    const centerSort = document.getElementById('centerSort');
    const serviceFilter = document.getElementById('serviceFilter');
    
    if (coachSort) coachSort.addEventListener('change', loadCoaches);
    if (locationFilter) locationFilter.addEventListener('change', loadCoaches);
    if (centerSort) centerSort.addEventListener('change', loadCenters);
    if (serviceFilter) serviceFilter.addEventListener('change', loadCenters);
}

// Star rating setup
function setupStarRating() {
    const stars = document.querySelectorAll('#starRating .star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStarDisplay();
        });
        
        star.addEventListener('mouseover', () => {
            highlightStars(index + 1);
        });
    });
    
    const starRating = document.getElementById('starRating');
    if (starRating) {
        starRating.addEventListener('mouseleave', updateStarDisplay);
    }
}

function updateStarDisplay() {
    const stars = document.querySelectorAll('#starRating .star');
    stars.forEach((star, index) => {
        if (index < currentRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('#starRating .star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Modal functions
function setupModalEvents() {
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                const modal = backdrop.closest('.modal');
                closeModal(modal.id);
            }
        });
    });
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function showContactModal() {
    showModal('contactModal');
}

function showSubscriptionModal() {
    showModal('subscriptionModal');
}

function showTeacherRegistration() {
    showPage('teacher-register');
}

// Action functions
function writeReview(type, id) {
    if (!currentUser) {
        showMessage('Please login to write a review', 'error');
        return;
    }
    
    currentReviewTarget = { type, id };
    const title = type === 'coach' ? 'Review Coach' : 'Review Center';
    document.getElementById('reviewModalTitle').textContent = title;
    showModal('reviewModal');
}

function subscribe() {
    if (!currentUser) {
        showMessage('Please login first', 'error');
        return;
    }
    
    currentUser.subscribed = true;
    sessionStorage.setItem('ssbcoach_user', JSON.stringify(currentUser));
    
    closeModal('subscriptionModal');
    showMessage('Subscription activated successfully!', 'success');
    
    // Refresh current page to show premium content
    loadPageContent(currentPage);
}

function startTest(testKey) {
    if (!currentUser || !currentUser.subscribed) {
        showSubscriptionModal();
        return;
    }
    
    showMessage(`Starting ${appData.practice_tests[testKey].name} test...`, 'success');
}

function readBlog(blogId) {
    const blog = appData.blogs.find(b => b.id === blogId);
    if (blog) {
        showMessage(`Opening: ${blog.title}`, 'success');
    }
}

// Utility functions
function showMessage(message, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = `message message--${type}`;
    messageEl.textContent = message;
    
    // Insert at top of main content
    const main = document.querySelector('.main');
    main.insertBefore(messageEl, main.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageEl.remove();
    }, 5000);
}

// Export functions for global access
window.showPage = showPage;
window.showLoginModal = showLoginModal;
window.showContactModal = showContactModal;
window.showSubscriptionModal = showSubscriptionModal;
window.showTeacherRegistration = showTeacherRegistration;
window.writeReview = writeReview;
window.subscribe = subscribe;
window.startTest = startTest;
window.readBlog = readBlog;
window.closeModal = closeModal;