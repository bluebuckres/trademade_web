import React from 'react';
import { Shield, Lock, Key, Server } from 'lucide-react';

export const Security = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Security at TradeMade
          </h1>
          <p className="text-xl text-gray-600">
            Your security is our top priority. We implement industry-leading security measures to protect your data and transactions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Data Encryption */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Lock className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Data Encryption</h2>
            </div>
            <p className="text-gray-600">
              All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
              We use SSL/TLS for all data transmission.
            </p>
          </div>

          {/* Access Control */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Key className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Access Control</h2>
            </div>
            <p className="text-gray-600">
              Multi-factor authentication, role-based access control, and regular security audits
              ensure only authorized access to your account.
            </p>
          </div>

          {/* Infrastructure Security */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Server className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Infrastructure Security</h2>
            </div>
            <p className="text-gray-600">
              Our infrastructure is hosted on secure cloud providers with SOC 2 compliance.
              Regular security patches and updates maintain system integrity.
            </p>
          </div>

          {/* Compliance */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-indigo-600 mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">Compliance</h2>
            </div>
            <p className="text-gray-600">
              We adhere to industry security standards and best practices.
              Regular security assessments ensure continuous compliance.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Security Commitment</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Regular security audits and penetration testing
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              24/7 security monitoring and incident response
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Secure API endpoints with rate limiting and authentication
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Regular backup and disaster recovery procedures
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
