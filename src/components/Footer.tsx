
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">OneDollarOAuth.com</h3>
          <p className="text-gray-400 mb-8">
            The OAuth service that doesn't cost you an arm, a leg, or your firstborn child.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#what-is-it" className="text-gray-300 hover:text-white transition-colors">
              What Is It
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#why-use-it" className="text-gray-300 hover:text-white transition-colors">
              Why Use It
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 OneDollarOAuth.com - Making OAuth affordable, one dollar at a time. 💰
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with love, caffeine, and the belief that not everything needs to cost $99/month.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
