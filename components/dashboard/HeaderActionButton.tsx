'use client'; 
import Button from '../ui/Button'; 

export default function HeaderActionButton() {
    const handleClick = () => {
        console.log('Navigating to Invoices page from the Watchlist button.');
    };

    return (
        <Button onClick={handleClick} variant="secondary">Invoices</Button>
    );
}