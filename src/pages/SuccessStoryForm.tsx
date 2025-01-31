import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function SuccessStoryForm() {
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState<File | null>(null);
  const [state, handleSubmit] = useForm('mqaeqkkw'); // Replace with your Formspree form ID

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(event.target.files[0]);
  //   }
  // };

  if (state.succeeded) {
    return (
      <div className="pt-16">
        <div className="container h-screen mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-xl  text-center text-gray-700">
            Your success story has been submitted successfully. You are an inspiration!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="bg-[#116DEC] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Share Your Success Story</h1>
          <p className="text-xl">Inspire others with your fitness journey</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                placeholder="Enter your name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="age" className="block text-gray-700 mb-2">
                Age
              </label>
              <input
                id="age"
                type="number"
                name="age"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                placeholder="Enter your age"
              />
              <ValidationError prefix="Age" field="age" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="achievement" className="block text-gray-700 mb-2">
                Your Achievement
              </label>
              <input
                id="achievement"
                type="text"
                name="achievement"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC]"
                placeholder="e.g., Lost 30kg in 6 months"
              />
              <ValidationError prefix="Achievement" field="achievement" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="story" className="block text-gray-700 mb-2">
                Your Story
              </label>
              <textarea
                id="story"
                name="story"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#116DEC] h-32"
                placeholder="Share your fitness journey..."
              ></textarea>
              <ValidationError prefix="Story" field="story" errors={state.errors} />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Rate Your Experience</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-8 w-8 cursor-pointer ${
                      star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* <div>
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Upload a Photo (Optional)
              </label>
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full"
              />
            </div> */}

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#116DEC] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {state.submitting ? 'Submitting...' : 'Submit Your Story'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
