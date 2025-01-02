import { useState, FormEvent } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    degree: '',
    fieldOfStudy: '',
    consent: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen w-screen bg-[linear-gradient(15deg,_theme(colors.gradientFirst),_theme(colors.gradientSecond),_theme(colors.gradientThird))]
                        flex flex-col items-center pt-[10vh] min-w-[351px]">
      <div className="w-full max-w-4xl text-center mb-12 mt-16">
        <div className="mb-4">
          <h1 className="text-white text-5xl font-bold mb-8">Systemvetardagen 2025</h1>
          <h2 className="text-white text-2xl">Sign up for updates</h2>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 w-full max-w-2xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 rounded-md bg-gray-100"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 rounded-md bg-gray-100"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-gray-100"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="w-full px-4 py-2 rounded-md bg-gray-100"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              required
            >
              <option value="">Select degree</option>
              <option value="bachelors">Bachelor's</option>
              <option value="masters">Master's</option>
              <option value="phd">PhD</option>
            </select>

            <input
              type="text"
              placeholder="Field of study"
              className="w-full px-4 py-2 rounded-md bg-gray-100"
              value={formData.fieldOfStudy}
              onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              required
            />
            <label className="text-sm text-gray-600">
              By checking this box, you consent to the collection and storage of the provided
              information in accordance with GDPR and to receiving emails about Systemvetardagen.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Sign up
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-white text-sm">
        <p>Systemvetardagen is organized by the Student Union DISK</p>
        <p>at the Department of Computer and Systems Sciences at Stockholm University</p>
      </div>
    </div>
  );
};

export default SignupForm;
