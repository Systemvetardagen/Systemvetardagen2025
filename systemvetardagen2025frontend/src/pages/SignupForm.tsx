import { useState, FormEvent } from 'react';
import { useMutation } from 'react-query';
import { customFetchInsertPreSignup } from '../utilities/customFetchInsertPreSignup';
interface PreSignup {
    firstName: string;
    lastName: string;
    email: string;
    degree: string;
    fieldOfStudy: string;
}

const SignupForm = () => {
    const [formData, setFormData] = useState<PreSignup>({
        firstName: '',
        lastName: '',
        email: '',
        degree: '',
        fieldOfStudy: '',
    });
    const [consent, setConsent] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const { mutate: insertPreSignup } = useMutation({
        mutationFn: () => customFetchInsertPreSignup('test', { ...formData }),

        onSuccess: (response) => {
            if (response && response.success) {
                setFormSubmitted(true);
            }
        },
    });
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        insertPreSignup();
    };
    if (formSubmitted) {
        return (
            <div
                className="h-screen w-screen gradient-background
        flex flex-col items-center pt-[10vh] min-w-[351px]"
            >
                <div className="w-full max-w-4xl text-center mb-12 mt-16">
                    <div className="mb-4">
                        <a href="/">
                            <h1 className="text-white text-5xl font-bold mb-8">
                                Systemvetardagen 2025
                            </h1>
                        </a>
                        <h2 className="text-white text-2xl">
                            Sign up for updates
                        </h2>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-8 w-full max-w-2xl shadow-xl text-center">
                    {/*TODO: FIX THIS PAGE*/}
                    <h1>Form submitted!</h1>
                </div>
                <div className="mt-8 text-center text-white text-sm">
                    <p>
                        Systemvetardagen is organized by the Student Union DISK
                    </p>
                    <p>
                        at the Department of Computer and Systems Sciences at
                        Stockholm University
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div
            className="min-h-screen w-full min-w-[375px] gradient-background
        flex flex-col items-center pt-[5vh]"
        >
            <div className="w-full lg:max-w-4xl max-w-[80%] text-center md:mb-12 md:mt-16">
                <div className="mb-4">
                    <a href="/">
                        <h1 className="text-white text-3xl lg:text-5xl font-bold mb-8">
                            Systemvetardagen 2025
                        </h1>
                    </a>
                    <h2 className="text-white text-2xl">Sign up for updates</h2>
                </div>
            </div>

            <div className="bg-white rounded-lg p-8 w-[80%] max-w-2xl shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full px-4 py-2 rounded-md bg-gray-100"
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        firstName: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full px-4 py-2 rounded-md bg-gray-100"
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        lastName: e.target.value,
                                    })
                                }
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
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            className="w-full px-4 py-2 rounded-md bg-gray-100"
                            value={formData.degree}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    degree: e.target.value,
                                })
                            }
                            required
                        >
                            <option value="">Select degree</option>
                            <option value="bachelors">Bachelor&apos;s</option>
                            <option value="masters">Master&apos;s</option>
                            <option value="phd">PhD</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Field of study"
                            className="w-full px-4 py-2 rounded-md bg-gray-100"
                            value={formData.fieldOfStudy}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    fieldOfStudy: e.target.value,
                                })
                            }
                            required
                        />
                    </div>

                    <div className="flex items-start space-x-2">
                        <input
                            type="checkbox"
                            className="mt-1"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            required
                        />
                        <label className="text-sm text-gray-600">
                            By checking this box, you consent to the collection
                            and storage of the provided information in
                            accordance with GDPR and to receiving emails about
                            Systemvetardagen.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md enabled:hover:bg-purple-700 transition-colors disabled:opacity-30"
                        disabled={!consent}
                    >
                        Sign up
                    </button>
                </form>
            </div>

            <div className="my-8 text-center text-white text-sm">
                <p>Systemvetardagen is organized by the Student Union DISK</p>
                <p>
                    at the Department of Computer and Systems Sciences at
                    Stockholm University
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
