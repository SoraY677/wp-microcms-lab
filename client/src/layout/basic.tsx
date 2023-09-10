import '@/app/globals.css'
import { ReactNode } from 'react';
const BasicLayout = ({ children }: {children: ReactNode}) => {
    return (
        <>
        <main>
            {children}
        </main>
        </>
    );
};
export default BasicLayout