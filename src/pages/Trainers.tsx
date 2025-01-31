import React, { useState } from 'react';
import GeneralTrainer from '../components/trainers/GeneralTrainer';
import PersonalTrainer from '../components/trainers/PersonalTrainer';

const Trainers = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Expert Trainers</h1>
            <p className="text-xl">
              Choose from our selection of certified trainers to help you achieve your fitness goals
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          
          <div className="flex justify-center space-x-4 mb-8">
            <button
              className={`px-6 py-2 font-bold ${
                activeTab === 'general' ? 'bg-[#116DEC] text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setActiveTab('general')}
            >
              General Training
            </button>
            <button
              className={`px-6 py-2 font-bold ${
                activeTab === 'personal' ? 'bg-[#116DEC] text-white' : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Training
            </button>
          </div>

          
          <div>
            {activeTab === 'general' && (
              <div>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">General Training Staff</h2>
                  <p className="text-gray-600">
                    Our general trainers are always available on the gym floor to assist with equipment and basic form guidance
                  </p>
                </div>
                <GeneralTrainer />
              </div>
            )}
            {activeTab === 'personal' && (
              <div>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Personal Training Specialists</h2>
                  <p className="text-gray-600">
                    Choose from our tiered personal trainers for customized, one-on-one training programs
                  </p>
                </div>
                <PersonalTrainer />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
