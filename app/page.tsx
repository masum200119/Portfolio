import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Award, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-white shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="MD. Tahidul Islam"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">MD. Tahidul Islam</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Researcher | Data Scientist | Competitive Programmer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="#contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">Contact Me</Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                View Projects
              </Button>
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/md-tahidul-islam17" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://github.com/md-tahidul-islam17" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:billahmasum124@yahoo.com">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a Computer Science and Engineering student at Pabna University of Science and Technology with a
                passion for data science, machine learning, and competitive programming.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My research interests include deep learning, computer vision, and natural language processing. I've
                published research on breast cancer detection using advanced deep learning networks and Bangla language
                classification.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                I'm an active competitive programmer with experience solving over 700 problems on Codeforces and have
                represented my university at the ICPC Asia Dhaka Regional Contest.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">billahmasum124@yahoo.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">+880 1715376933</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">md-tahidul-islam17</span>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Pabna Sadar, Pabna 6600, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700">Python</Badge>
                  <Badge className="bg-gray-700">MATLAB</Badge>
                  <Badge className="bg-gray-700">C</Badge>
                  <Badge className="bg-gray-700">C++</Badge>
                  <Badge className="bg-gray-700">Java</Badge>
                  <Badge className="bg-gray-700">Visual C++</Badge>
                  <Badge className="bg-gray-700">Prolog</Badge>
                  <Badge className="bg-gray-700">Assembly Language (8085, 8086)</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning & Deep Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700">Supervised Learning</Badge>
                  <Badge className="bg-gray-700">Unsupervised Learning</Badge>
                  <Badge className="bg-gray-700">Computer Vision</Badge>
                  <Badge className="bg-gray-700">CNNs (Expert)</Badge>
                  <Badge className="bg-gray-700">RNNs</Badge>
                  <Badge className="bg-gray-700">Transfer Learning</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Tools & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700">Pandas</Badge>
                  <Badge className="bg-gray-700">Matplotlib</Badge>
                  <Badge className="bg-gray-700">Scikit-learn</Badge>
                  <Badge className="bg-gray-700">PyCaret</Badge>
                  <Badge className="bg-gray-700">Numpy</Badge>
                  <Badge className="bg-gray-700">PyTorch</Badge>
                  <Badge className="bg-gray-700">TensorFlow</Badge>
                  <Badge className="bg-gray-700">OpenCV</Badge>
                  <Badge className="bg-gray-700">SpaCy</Badge>
                  <Badge className="bg-gray-700">LaTeX</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>B.Sc in Computer Science and Engineering</CardTitle>
                    <CardDescription>Pabna University of Science and Technology</CardDescription>
                  </div>
                  <Badge>2020–Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">CGPA: 3.61 (Current)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Higher Secondary Certificate (H.S.C)</CardTitle>
                    <CardDescription>Tilna Degree College, Naogaon</CardDescription>
                  </div>
                  <Badge>2017–2019</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Final Grade: 4.75</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resume Analysis</CardTitle>
                <CardDescription>Online Auto Resume Reader and Match Skills with Required Skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An automated system that analyzes resumes and matches candidate skills with job requirements.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="https://www.kaggle.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Kaggle
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Diabetes Prediction</CardTitle>
                <CardDescription>Machine learning model for diabetes detection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A machine learning model that predicts diabetes risk based on patient data.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ANN: Digit Classification</CardTitle>
                <CardDescription>Neural network for digit recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An artificial neural network that classifies handwritten digits.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Heart Disease Prediction</CardTitle>
                <CardDescription>ML model for heart disease detection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A machine learning model that predicts heart disease risk based on patient data.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gold Price Estimation</CardTitle>
                <CardDescription>Predicting gold prices using ML</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A machine learning model that predicts gold prices based on historical data.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>Student Registration Form using PHP-Laravel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A web application for student registration built with Laravel.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Notebook (Mobile App)</CardTitle>
                <CardDescription>Developed with Android Studio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A mobile note-taking application developed using Android Studio.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Book Store (Web App)</CardTitle>
                <CardDescription>Built using .NET Core</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An online bookstore web application built with .NET Core.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section id="problem-solving" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Problem Solving</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Codeforces
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Solved more than 700 problems
                  <br />
                  Max rank: Pupil (1243)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Leetcode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Solved more than 180 problems</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  Codechef
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Solved more than 100 problems</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  CSES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Solved more than 30 problems</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Code className="h-5 w-5 mr-2" />
                  LightOJ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Solved more than 30 problems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Publications</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Breast Cancer Detection via Advanced Deep Learning Networks</CardTitle>
                  <Badge>2025</Badge>
                </div>
                <CardDescription>UCICS-2025 (Published)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Authors: MD. Tahidul Islam, Md Abdur Rahim, Abu Saleh Musa Miah, Md. Imran Hossain, Md. Shafiul Azam
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Publication
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>CATBOOST Classifier-Based Sadhu and Cholit Bangla Classification</CardTitle>
                  <Badge>2024</Badge>
                </div>
                <CardDescription>GUBJSE (Under Review)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Authors: MD. Tahidul Islam, Md Abu Johab, Md Roton Ahmed, Nakib Aman
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Publication
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Runner-up
                  </CardTitle>
                  <Badge>2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Intra University Programming Contest, PUST</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    2nd Runner-up
                  </CardTitle>
                  <Badge>2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Intra University Programming Contest, PUST</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    17th Place
                  </CardTitle>
                  <Badge>2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Inter University Programming Contest, North Western University
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    2nd Place
                  </CardTitle>
                  <Badge>2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Inter Department Individual Programming Contest, PUST
                </p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    ICPC Asia Dhaka Regional Contest Participant
                  </CardTitle>
                  <Badge>2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">Onsite (Hosted by DIU) - University Representative</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-400" />
                  <a href="mailto:billahmasum124@yahoo.com" className="hover:text-gray-300">
                    billahmasum124@yahoo.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-400" />
                  <a href="tel:+8801715376933" className="hover:text-gray-300">
                    +880 1715376933
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-gray-400" />
                  <a
                    href="https://www.linkedin.com/in/md-tahidul-islam17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    md-tahidul-islam17
                  </a>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 text-gray-400 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Pabna Sadar, Pabna 6600, Bangladesh</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  ></textarea>
                </div>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-950 text-gray-400 text-center">
        <div className="max-w-5xl mx-auto">
          <p>© {new Date().getFullYear()} MD. Tahidul Islam. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://www.linkedin.com/in/md-tahidul-islam17" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com/md-tahidul-islam17" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="mailto:billahmasum124@yahoo.com">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
