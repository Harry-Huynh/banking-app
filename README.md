# 🏦 Banking Web Application

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)
![Plaid](https://img.shields.io/badge/Plaid-000000?style=for-the-badge&logo=plaid&logoColor=white)
![Dwolla](https://img.shields.io/badge/Dwolla-FF6B00?style=for-the-badge&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3C3C3C?style=for-the-badge&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![License](https://img.shields.io/badge/ISC-License-lightgrey)

A modern full-stack banking application that allows users to securely link external bank accounts, view their transaction history, and send money through Dwolla. Built using Next.js App Router, styled with Tailwind CSS, and managed with Appwrite for auth and data.

---

- [🏦 Banking Web Application](#-banking-web-application)
  - [🔗 Project Links](#-project-links)
  - [🚀 Features](#-features)
  - [🧪 Testing Information](#-testing-information)
  - [🌱 Environment Variable](#-environment-variable)
  - [📦 Dependencies](#-dependencies)
  - [🔐 Authentication Flow (Appwrite)](#-authentication-flow-appwrite)
  - [🌐 API \& Service Integrations](#-api--service-integrations)
  - [🧩 Key Components \& Pages](#-key-components--pages)
  - [🛡️ Route Protection Flow](#️-route-protection-flow)
  - [📌 Notes](#-notes)

---

## 🔗 Project Links

🌐 **Live Website**: [Visit the App](https://banking-app-ivory-one.vercel.app/)  
📄 **License**: ISC License

---

## 🚀 Features

🔐 `Authentication & Authorization using Appwrite`

- Secure login and logout
- Server-side authentication
- Route protection and user-level data access

🏦 `Bank Account Linking via Plaid`

- Users can connect real bank accounts
- Retrieves account balances and transaction history
- Uses pagination fir displaying transaction

💸 `Send Money with Dwolla`

- Initiates money transfers between connected accounts
- Handles transfer creation and status tracking

📊 `Transaction History`

- View and classify transactions by date, channel, status, and category
- Real-time updates on transaction status
- Display top categories based on transaction history

🎨 `Responsive Design with Tailwind CSS and shadcn/ui`

- Mobile-friendly and responsive layout
- Reusable accessible components

✅ `Form Handling and Validation`

- Built with React Hook Form and Zod
- Real-time input validation and error display

🌍 `Deployed on Vercel`

- High-performance server-rendered experience
- Edge-optimized routing

---

## 🧪 Testing Information

`To connect banks using Plaid`

- Username: **user_good**
- Password: **password_good**

`To log in banking web app`

- Email: **demo@gmail.com**
- Password: **123123123**

---

## 🌱 Environment Variable

```env
#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_ITEM_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
NEXT_APPWRITE_KEY=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=
DWOLLA_ENV=
```

---

## 📦 Dependencies

- `next`: App Router, SSR support
- `@shadcn/ui`: Pre-built component library
- `tailwindcss`: Utility-first styling
- `react-hook-form`: Form management
- `zod`: Schema validation
- `plaid`: Plaid Node Software Development Kit (SDK)
- `dwolla-v2`: Dwolla Software Development Kit (SDK)
- `appwrite`: Appwrite SDK for auth and DB

---

## 🔐 Authentication Flow (Appwrite)

1. User signs up or logs in with Appwrite auth.
2. Session is stored securely in cookies; protected pages require valid session.
3. Authenticated users can link bank accounts and send money.
4. Data is stored in Appwrite's document database, scoped to each user.

---

## 🌐 API & Service Integrations

| Service      | Description                                      |
| ------------ | ------------------------------------------------ |
| **Plaid**    | Fetches account info, balances, and transactions |
| **Dwolla**   | Initiates money transfers                        |
| **Appwrite** | Handles auth and stores user-related data        |

---

## 🧩 Key Components & Pages

- **PlaidLink** – UI and logic for connecting Plaid accounts
- **TransactionHistory** – Displays and filters user transactions
- **PaymentTransfer** – Lets users initiate Dwolla transfers
- **HomePage** – Displays all information about user's bank account

---

## 🛡️ Route Protection Flow

1. Each route is checked using Appwrite token stored in cookies.
2. Unauthenticated users are redirected to `/sign-in`.
3. If authenticated, user data (Plaid tokens, transactions) is loaded automatically.
4. Session state is stored in cookies and validated on route change.

---

## 📌 Notes

- All API keys and tokens must be securely managed via environment variables.
- Transactions are **read-only** from Plaid.
- Money transfers are done via Dwolla.
- This app is built using **Next.js App Router**.

---
