import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Abu Usman Movers Jubail
            </h1>
            <p className="text-gray-600 mb-6">
              نقل عفش بالجبيل والمنطقة الشرقية - متواجدون على مدار 24 ساعة
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/966582230098"
                className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow transition"
              >
                WhatsApp: +966 58 223 0098
              </a>
              <a
                href="tel:+966582230098"
                className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow transition"
              >
                Call: +966 58 223 0098
              </a>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
