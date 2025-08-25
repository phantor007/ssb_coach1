# Let me create comprehensive data structure for the SSB coaching website

import json

# Sample data for the website
website_data = {
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
            "sponsored": True,
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
            "sponsored": False,
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
            "sponsored": True,
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
            "sponsored": False,
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
            "sponsored": False,
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
            "sponsored_review": True,
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
            "sponsored_review": False,
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
            "sponsored_review": True,
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
            "sponsored_review": False,
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
            "sponsored_review": False,
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
            "featured": True,
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
            "featured": True,
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
            "featured": True,
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
            "featured": False,
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
            "featured": False,
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
}

# Save the data as JSON
with open('ssbcoach_website_data.json', 'w') as f:
    json.dump(website_data, f, indent=2)

print("Website data structure created successfully!")
print(f"Total Coaches: {len(website_data['coaches'])}")
print(f"Total SSB Centers: {len(website_data['ssb_centers'])}")
print(f"Total Blog Posts: {len(website_data['blogs'])}")
print(f"Practice Test Modules: {len(website_data['practice_tests'])}")