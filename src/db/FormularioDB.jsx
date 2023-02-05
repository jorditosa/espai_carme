
const Formulariodb = ({producte}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="title"
                >Nom:</label>
                <input 
                    id="title"
                    type="text"
                    className="mt-2 block w-full p-3 bg-white rounded-md"
                    placeholder="Títol del producte"
                    name="title"
                    defaultValue={producte?.title}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Preu:</label>
                <input 
                    id="price"
                    type="text"
                    className="mt-2 block w-full p-3 bg-white rounded-md"
                    placeholder="Preu"
                    name="price"
                    defaultValue={producte?.price}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="alergens"
                >Al·lèrgens:</label>
                <input 
                    id="alergens"
                    type="text"
                    className="mt-2 block w-full p-3 bg-white rounded-md"
                    placeholder="Àl·lèrgens"
                    name="alergens"
                    defaultValue={producte?.alergens}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="description"
                >Descripció:</label>
                <textarea
                    as="textarea"
                    id="description"
                    type="text"
                    className="mt-2 block w-full p-3 bg-white h-40 align-self rounded-md"
                    placeholder="Descripció adicional"
                    name="description"
                    defaultValue={producte?.description}
                />
            </div>
        </>
    )
}

export default Formulariodb