export default function Footer() {
    return (
        <div className="flex justify-center p-4 text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} QR Code Generator. Todos os direitos reservados.
        </div>
    );
}
