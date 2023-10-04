'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";

import './index.scss';

//Componentes
import IconLink from '../Elements/IconLink';

export default function Header() {

    const router = useRouter();

    return <header >
        <div className='flex justify-between'>
            <div className='flex align-center gap-10' >
                <Image src="https://www.kenta.com.br/wp-content/uploads/2023/07/Logo-Kenta-25-anos-1-1024x198.png" width="206" height="40" alt="Logo FFF Sistemas" className="link mr-20" onClick={() => router.push("/")} />
                <IconLink icon='icon icon-home' tooltip={{ content: 'Início', position: 'left' }} onClick={() => router.push("/")} />
                <IconLink icon='icon icon-list' tooltip={{ content: 'Relatório', position: 'left' }} onClick={() => router.push("/relatorio")} />
            </div>

            <div className='flex align-center gap-10' >
                <IconLink icon='icon icon-envelope' tooltip={{ content: 'E-mail', position: 'right' }} onClick={() => { window.location.href = 'mailto:fabricio@fffs.com.br'; }} />
                <IconLink icon='icon icon-whatsapp' tooltip={{ content: 'WhatsApp', position: 'right' }} onClick={() => { window.open('https://api.whatsapp.com/send?phone=5521997999959&text=Adoramos%20o%20que%20você%20fez!%20Queremos%20seu%20talento%20no%20nosso%20time.', '_blank', 'noopener,noreferrer'); }} />
            </div>
        </div>
    </header>
}