export default function Footer(): JSX.Element {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                
                <span className="ml-3 text-xl">React BoilderPlate</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                    © 2023 کپی با ذکر منبع —
                    <a href="https://github.com/AshkanMH1383" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
                        @AshkanMH1383</a>
                </p>
             
            </div>
        </footer>
    )
}
