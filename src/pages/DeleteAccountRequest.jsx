import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

function DeleteAccountRequest() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just simulate a submission.
    console.log('Account Deletion Request Submitted:', { email, reason });
    setSubmitted(true);
    // You might want to clear the form after submission if not redirecting
    // setEmail('');
    // setReason('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-red-200 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
              <Mail className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">Account Deletion Request</CardTitle>
            <CardDescription className="text-gray-600">
              Please fill out the form below to request the deletion of your Mukawan account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your-email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reason">Reason for Deletion (Optional)</Label>
                  <Textarea
                    id="reason"
                    placeholder="e.g., Privacy concerns, no longer using the app, etc."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Request
                </Button>
              </form>
            ) : (
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Request Submitted!</h3>
                <p className="text-gray-700">
                  Your account deletion request for <span className="font-medium text-green-800">{email}</span> has been received.
                  We will process your request as soon as possible.
                </p>
                <p className="text-gray-600 mt-4">
                  If you have any further questions, please contact us at <a href="mailto:Jehadmukahal1@gmail.com" className="text-blue-600 hover:underline">Jehadmukahal1@gmail.com</a>.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default DeleteAccountRequest;

