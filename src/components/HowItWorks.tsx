
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create Your OAuth App",
      description: "Get your client ID & secret from Slack, GitHub, Discord, or whatever platform you're integrating with.",
      emoji: "🔑"
    },
    {
      number: "2", 
      title: "Set Up With Us",
      description: "Create a new OAuth app in our platform with your credentials, add scopes, and use our redirect URI.",
      emoji: "⚙️"
    },
    {
      number: "3",
      title: "Connect Your Users",
      description: "Make an API call to get a connection URL with a single-use token and redirect your user to it.",
      emoji: "🔗"
    },
    {
      number: "4",
      title: "User Authorizes",
      description: "User gets prompted to authorize your app with the scopes you specified. We save their token securely.",
      emoji: "✅"
    },
    {
      number: "5",
      title: "Get Fresh Tokens",
      description: "Make an API call anytime you need a fresh access token for that user. We handle all the refresh logic.",
      emoji: "🔄"
    }
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works ⚡
          </h2>
          <p className="text-xl text-gray-600">
            5 simple steps to OAuth nirvana (and it still costs just $1)
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {step.number}
              </div>
              
              <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{step.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-100 border border-green-300 p-6 rounded-lg inline-block">
            <p className="text-lg font-semibold text-green-800 mb-2">
              That's it! No webhooks, no complex flows, no headaches. 🎊
            </p>
            <p className="text-green-700">
              Just two API calls and you're done. Your users get seamless OAuth, you get their tokens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
