import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import {
  Smartphone,
  Camera,
  Shield,
  Zap,
  Heart,
  Download,
  ChevronDown,
  CheckCircle,
  AlertTriangle,
  Eye,
  Lock,
  Mail,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import mukawaLogo from "./assets/logobg3.png";
import "./App.css";
import DeleteAccountRequest from "./pages/DeleteAccountRequest.jsx";

function HomePage() {
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);
  const [showTermsDetails, setShowTermsDetails] = useState(false);

  const features = [
    {
      icon: Camera,
      title: "Smart Barcode Scanning",
      description:
        "Instantly scan any product barcode to reveal detailed ingredient information and allergen warnings.",
    },
    {
      icon: Eye,
      title: "AI-Powered Analysis",
      description:
        "Get intelligent product summaries and insights powered by advanced AI technology.",
    },
    {
      icon: AlertTriangle,
      title: "Allergen Detection",
      description:
        "Quickly identify potential allergens and ingredients that matter to your health and dietary needs.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Get instant results with our optimized scanning technology and real-time product database.",
    },
  ];

  const privacySections = [
    {
      title: "Information we collect",
      items: [
        "Camera: Used only for barcode scanning, no video recording or transmission",
        "Barcode/Product Data: Temporary processing to fetch product details from public databases",
        "Usage Data: Analytics and crash reports to improve the app’s stability and features",
      ],
    },
    {
      title: "How we use information",
      items: [
        "Provide scanning and product lookup features",
        "Generate AI summaries when requested",
        "Improve app performance and fix crashes",
      ],
    },
    {
      title: "Sharing and third parties",
      items: [
        "We may share data with third-party service providers that help operate the app (e.g., product database APIs, AI services, crash analytics). We do not sell your personal information.",
      ],
    },
    {
      title: "Images and uploads",
      items: [
        "By default, camera frames used for scanning are processed locally and are not uploaded. If the app prompts you to upload an image or product photo, we will notify you and request consent before any upload.",
      ],
    },
    {
      title: "Data retention & security",
      items: [
        "We retain data only as long as needed to provide the service or as required by law. We take reasonable measures to protect data, but no system is completely secure.",
      ],
    },
    {
      title: "Your choices",
      items: [
        "You can remove the app’s permission to use the camera in your device settings, but then barcode scanning will be disabled.",
        "You can contact us to request deletion of any account data at: Jehadmukahal1@gmail.com",
      ],
    },
    {
      title: "Contact",
      items: [
        "If you have questions about this policy, contact us at: Jehadmukahal1@gmail.com",
      ],
    },
  ];

  const termsSections = [
    {
      title: "Acceptance of Terms",
      items: [
        "By downloading, installing, or using the Mukawan mobile application, you agree to be bound by these Terms of Use.",
        "If you do not agree to these terms, please do not use the application.",
        "These terms constitute a legally binding agreement between you and Jehad Mukahhil.",
      ],
    },
    {
      title: "Description of Service",
      items: [
        "Mukawan is a mobile application that allows users to scan product barcodes to view ingredients, allergens, and AI-generated product summaries.",
        "The service is provided 'as is' and we make no warranties about the accuracy, completeness, or reliability of the information provided.",
        "Product information is sourced from third-party databases and may not always be current or accurate.",
      ],
    },
    {
      title: "User Responsibilities",
      items: [
        "You are responsible for ensuring the accuracy of your use of the application.",
        "You must not use the application for any illegal or unauthorized purpose.",
        "You agree to use the application in compliance with all applicable laws and regulations.",
      ],
    },
    {
      title: "Subscription Terms (if applicable)",
      items: [
        "Any premium features or subscriptions are subject to additional terms and pricing as displayed in the app.",
        "Subscriptions may auto-renew unless cancelled before the renewal date.",
        "You can manage your subscriptions through your device's app store settings.",
      ],
    },
    {
      title: "Intellectual Property",
      items: [
        "The Mukawan application and all its content, features, and functionality are owned by Jehad Mukahhil.",
        "You may not copy, modify, distribute, or reverse engineer the application.",
      ],
    },
    {
      title: "Disclaimer of Warranties",
      items: [
        "The application is provided 'as is' without any warranties, express or implied.",
        "We do not guarantee that the application will be error-free or continuously available.",
        "Product information provided by the application should not replace professional medical or nutritional advice.",
      ],
    },
    {
      title: "Limitation of Liability",
      items: [
        "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the amount you paid for the application, if any.",
      ],
    },
    {
      title: "Termination",
      items: [
        "We may terminate or suspend your access to the application at any time, with or without notice.",
        "Upon termination, your right to use the application will cease immediately.",
      ],
    },
    {
      title: "Changes to Terms",
      items: [
        "We reserve the right to modify these terms at any time.",
        "Continued use of the application after changes constitutes acceptance of the new terms.",
      ],
    },
    {
      title: "Contact Information",
      items: [
        "For questions about these Terms of Use, please contact us at: Jehadmukahal1@gmail.com",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={mukawaLogo} alt="Mukawan Logo" className="h-17 w-80" />
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#privacy"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Terms
            </a>
            <a
              href="#download"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Download
            </a>
            <Link
              to="/delete-account-request"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Delete Account
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
              Smart Product Analysis
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Know What You're
              <span className="text-green-600 block">Eating</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Mukawan helps you make informed food choices by scanning barcodes
              to reveal ingredients, allergens, and AI-generated product
              insights instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() => {
                  const appShowcaseSection =
                    document.querySelector("#app-showcase");
                  if (appShowcaseSection) {
                    const elementPosition = appShowcaseSection.offsetTop;
                    const offsetPosition = elementPosition - 100; // 100px offset from top

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                Learn More
              </Button>
            </div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-sm text-gray-500 font-medium">
                Developed by{" "}
                <span className="text-green-600 font-semibold">
                  Jehad Mukahal
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Smart Shopping
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make informed decisions about the products
              you buy and consume.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-green-100">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                      <feature.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section
        id="app-showcase"
        className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Available on iOS & Android
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Download Mukawan today and start making smarter food choices.
                Our app works seamlessly across all your devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/sa/app/mukawan/id6751318678",
                      "_blank"
                    )
                  }
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.jehad.myapp",
                      "_blank"
                    )
                  }
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <Smartphone className="h-32 w-32 mx-auto text-white/80 mb-4" />
                <p className="text-green-100">Scan. Analyze. Decide.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to protecting your privacy and being transparent
              about our data practices.
            </p>
          </motion.div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
                  className="text-green-600"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      showPrivacyDetails ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </div>
              <CardDescription>Last updated: 19/08/2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Mukawan helps users scan product barcodes to view ingredients,
                allergens, and AI-generated product summaries. This Privacy
                Policy explains what information we collect, why we collect it,
                and your rights.
              </p>

              {showPrivacyDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
                    {privacySections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 pl-7">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <Separator />

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Lock className="h-5 w-5 text-green-600 mr-2" />
                        Data Security & Retention
                      </h3>
                      <p className="text-gray-600 mb-4">
                        We retain data only as long as needed to provide the
                        service or as required by law. We take reasonable
                        measures to protect data, but no system is completely
                        secure.
                      </p>
                      <p className="text-gray-600">
                        By default, camera frames used for scanning are
                        processed locally and are not uploaded. If the app
                        prompts you to upload an image or product photo, we will
                        notify you and request consent before any upload.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Mail className="h-5 w-5 text-blue-600 mr-2" />
                        Contact Us
                      </h3>
                      <p className="text-gray-600 mb-2">
                        If you have questions about this policy or want to
                        request deletion of your data, contact us at:
                      </p>
                      <a
                        href="mailto:Jehadmukahal1@gmail.com"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Jehadmukahal1@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms of Use Section */}
      <section id="terms" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Terms of Use
            </h2>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using the Mukawan
              application.
            </p>
          </motion.div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-2xl">
                    Terms of Use (EULA)
                  </CardTitle>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setShowTermsDetails(!showTermsDetails)}
                  className="text-green-600"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      showTermsDetails ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </div>
              <CardDescription>Last updated: 19/08/2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                These Terms of Use ("Terms") govern your use of the Mukawan
                mobile application. By using our app, you agree to these terms.
                If you do not agree, please do not use the application.
              </p>

              {showTermsDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-8">
                    {termsSections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 pl-7">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <Separator />

                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                        Important Notice
                      </h3>
                      <p className="text-gray-700">
                        Mukawan is a helpful tool to highlight potential
                        allergens, high-sugar items, and unfamiliar additives —
                        but it is not a replacement for medical or professional
                        advice. Always check product labels and consult
                        professionals for allergy or medical concerns.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Mail className="h-5 w-5 text-blue-600 mr-2" />
                        Contact Us
                      </h3>
                      <p className="text-gray-600 mb-2">
                        If you have questions about these Terms of Use, contact
                        us at:
                      </p>
                      <a
                        href="mailto:Jehadmukahal1@gmail.com"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Jehadmukahal1@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already making smarter food
              choices with Mukawan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/sa/app/mukawan/id6751318678",
                    "_blank"
                  )
                }
              >
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.jehad.myapp",
                    "_blank"
                  )
                }
              >
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src={mukawaLogo}
                alt="Mukawan Logo"
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Making food choices smarter, one scan at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="hover:text-white transition-colors"
                  >
                    Download
                  </a>
                </li>
                <li>
                  <Link
                    to="/delete-account-request"
                    className="hover:text-white transition-colors"
                  >
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                <a
                  href="mailto:Jehadmukahal1@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Jehadmukahal1@gmail.com
                </a>
              </p>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Mukawan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/delete-account-request"
          element={<DeleteAccountRequest />}
        />
      </Routes>
    </Router>
  );
}

export default App;
