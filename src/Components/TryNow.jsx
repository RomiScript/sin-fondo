const TryNow = () => {
    return (
        <div className="flex flex-col items-center justify-center bg:white px-4">
            <h2 className="text-3xl md:text-xl font-bold text-gray-900 mb:7 text-center">
                ¡Eliminar el fondo de tus fotos nunca fue tan fácil!
            </h2>
            <p className="text-gray-500 mb-8 text-center">Fondos transparentes para cualquier imagen.</p>
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center space-y-4">
                <input type="file" id="upload2" hidden  accept={"image/*"} />
                <label htmlFor="upload2" className="bg-red-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg">
                    Subir imagen
                </label>
                <p className="text-gray-600 text-sm">También puedes arrastrar un archivo, pegar una imagen, o una <a href="#" className="text-blue-500 underline">URL</a> </p>
            </div>
            </div>
    )
}
export default TryNow;