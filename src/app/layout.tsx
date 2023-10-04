"use client";
import '../assets/style/bundle.scss'
import type { Metadata } from 'next'

//Componentes Layout
import Header from '../components/Header'

//Redux
import { Provider } from "react-redux";
import { store } from "../store";

export const metadata: Metadata = {
  title: 'Desafio Kenta'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
