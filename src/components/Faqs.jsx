import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: "What is CardPay?",
      answer: "CardPay provides digital cashless wallet via CardPay which allows seamless transactions within closed loops via QR codes."
    },
    {
      question: "How to pay with CardPay?",
      answer: "Go to any vendor where CardPay is enabled. Simply scan the vendor's QR code. Enter the 4-digit pin. That's it! Your transaction is done within seconds."
    }
  ],
  [
    {
      question: "How to put money in account?",
      answer: "Open your CardPay app. Tap on Top-Up. Enter the amount you want to deposit. A screen will open with a Consumer ID. Copy the ID. Pay via online banking, mobile banking, or debit/credit card. Further instructions for each method is provided with pictures in Top-Up section."
    },
    {
      question: " Can I take money out/withdraw once I deposit it into CardPay?",
      answer: "Yes and no. You can not directly withdraw the money from CardPay like ATM. But, you can always send in your money to your peer or any CardPay user and receive cash from them in return."
    }
  ],
  [
    {
      question: "Can Alumni's use this?",
      answer: "Yes, but you need to have your campus email access. That's because during sign up, the OTP code is sent your campus email."
    },
    {
      question: "Is my money secured if I put it in CardPay?",
      answer: "Yes, your money is completely secured with CardPay. CardPay is powered by Google Cloud security and uses 1-LINK as a payment gateway."
    }
  ]

]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-10"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="/contact"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
