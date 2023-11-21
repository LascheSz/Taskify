const ClerkLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div style={{
            minHeight: '100vh', // Setzt die minimale Höhe auf 100% des Viewport
            display: 'flex',
            alignItems: 'center', // Zentriert die Kinder vertikal
            justifyContent: 'center', // Zentriert die Kinder horizontal
        }}>
                {children}
        </div>
    );
};
export default ClerkLayout;