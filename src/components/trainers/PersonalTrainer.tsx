import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const personalTrainers = [
  {
    name: "Rajvansh Chaudhary",
    image: "./assets/images/rajvansh.jpg",
    description: "Elite trainer with 10+ years in personal training",
    tier: "platinum",
    price: "",
    experience: "10 years in personal training",
    certifications: [
      "CPT from Equilibrium Pro Academy",
      "DPT from K11 school of Fitness Sciences",
      "CPR & AED Certified (Trauma Response)"
    ],
    specialties: [
      "Strength & Conditioning",
      "Transformation",
      "Fat Loss"
    ]
  },
  {
    name: "Rohit Jaglan",
    image: "./assets/images/rohit.jpg",
    description: "Certified personal trainer and expert in fat loss, functional training, and kettlebell workouts",
    tier: "gold",
    price: "",
    experience: "3 years of experience",
    certifications: [
      "CPT from IIFEM"
    ],
    specialties: [
      "Fat Loss",
      "Functional Training",
      "Kettlebell Workouts"
    ]
  },
  {
    name: "Parul Lamba",
    image: "./assets/images/parul.jpg",
    description: "Certified personal trainer with expertise in fat loss",
    tier: "silver",
    price: "",
    experience: "2 years of experience",
    certifications: [
      "K11 Certified Personal Trainer",
      "CPR & AED Certified"
    ],
    specialties: [
      "Fat Loss"
    ]
  },
  {
    name: "Akash Sunar",
    image: "assets/images/akash verma.jpg",
    description: "Weight loss transformation expert",
    tier: "silver",
    price: "",
    experience: "4 years in transformation",
    certifications: [
      "Certification Guru Aesthetic Fitness Academy",
      "Personal Training, Circuit Training, and CPR"
    ],
    specialties: [
      "Weight Loss",
      "Transformation"
    ]
  },
  {
    name: "Ajay Lehri",
    image: "./assets/images/lehri.jpg",
    description: "Expert in weight loss and muscle building",
    tier: "silver",
    price: "",
    experience: "5+ years of experience",
    certifications: [
      "Certification Guru Aesthetic Fitness Academy",
      "Personal Training, Circuit Training, and CPR"
    ],
    specialties: [
      "Weight Loss",
      "Muscle Building"
    ]
  },
  {
    name: "Sumit Takhar",
    image: "assets/images/sumit.jpg",
    description: "Latination & Rehab Pilates expert",
    tier: "silver",
    price: "",
    experience: "7+ years in Latination & Rehab Pilates",
    certifications: [
      "Rehab certified (ACE/prehab)",
      "Pilates certified  (ACE/ Fssa | European active / can fit pro AFFA )",
      "Nutritionist (Stanford university)",
      "Certified KIZOMBA and Latin instructor",
    ],
    specialties: [
      "Fat loss and special population expert",
      "Transformation"
    ]
  },{
    name: "Nikhil Saini",
    image: "assets/images/nikhil.jpg",
    description: "Certified yoga instructor with 1 year experience in teaching others on the paths to holistic health.",
    tier: "silver",
    price: "",
    experience: "4 years in yoga transformation",
    certifications: [
      "Bachelor's in yoga science , Patanjali University",
      "Master's in Human Consciousness and yogic science, DSVV Haridwar"
    ],
    specialties: [
      "Mindfulness-based stress reduction",
      "Yoga therapy for emotional well-being"
    ]
  }
];

const getTierColor = (tier) => {
  switch (tier) {
    case "platinum":
      return "text-emerald-500";
    case "gold":
      return "text-yellow-500";
    case "silver":
      return "text-gray-400";
    case "bronze":
      return "text-amber-700";
    default:
      return "text-gray-500";
  }
};

const PersonalTrainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {personalTrainers.map((trainer, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fit=crop&w=800&h=600";
                e.currentTarget.onerror = null;
              }}
            />
            <div className="absolute top-4 right-4 flex">
              {[
                ...Array(
                  trainer.tier === "platinum"
                    ? 4
                    : trainer.tier === "gold"
                    ? 3
                    : trainer.tier === "silver"
                    ? 2
                    : 1
                )
              ].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${getTierColor(trainer.tier)} fill-current drop-shadow-lg`}
                />
              ))}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
            <div className="flex items-center justify-between mb-3">
              <span className={`font-semibold capitalize ${getTierColor(trainer.tier)}`}>
                {trainer.tier} Trainer
              </span>
              <span className="text-[#116DEC] font-semibold">{trainer.price}</span>
            </div>
            <p className="text-gray-600">{trainer.description}</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Experience</h4>
              <p className="text-gray-600">{trainer.experience}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Certifications</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {trainer.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Specialties</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {trainer.specialties.map((specialty, idx) => (
                  <li key={idx}>{specialty}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PersonalTrainer;
