export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with SpeakEasy!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_9AQ00V8eMeVW6sw3cc",
      priceId: 
        process.env.NODE_ENV === "development"
          ? "price_1PzP2uSHfC7XrxxPYnoATD9N"
          : "",
    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let’s go!",
      price: "19",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_eVafZTamUdRS9EI3cd",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PzP2uSHfC7XrxxPHkWbUvCs"
          : "",
    },
  ];
  
  export const ORIGIN_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://speakeasyai-demo.vercel.app";
  