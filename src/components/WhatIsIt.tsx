
const WhatIsIt = () => {
  return (
    <section className="py-20 bg-gray-50" id="what-is-it">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What The Heck Is This? 🤔
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An embeddable integration platform that's simple and cheap (like, really cheap)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                The Problem 😤
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Building OAuth flows is a pain in the ass</li>
                <li>• Token management is complicated AF</li>
                <li>• Other solutions cost $99-$500/month 💸</li>
                <li>• Vendor lock-in with unified APIs nobody asked for</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-green-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Our Solution 🎉
              </h3>
              <ul className="space-y-3">
                <li>• We handle all the OAuth complexity</li>
                <li>• Always-fresh access tokens via API</li>
                <li>• Secure field-level encryption</li>
                <li>• Your branding, not ours</li>
                <li>• Did we mention it's just $1? 🤑</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg inline-block">
            <p className="text-lg font-semibold text-yellow-800">
              The easiest and most-secure way to collect and manage OAuth tokens 
              without building webhooks, authorization flows, token exchanges, and refreshing.
            </p>
            <p className="mt-2 text-yellow-700">
              We manage all the complexity, you ship integrations quickly. It's that simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIt;
