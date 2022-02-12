type HeaderProps = {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <header className="bg-sky-700 py-6 text-white text-center">
            <h1 className="text-4xl">{title}</h1>
        </header>
    );
};

export default Header;
