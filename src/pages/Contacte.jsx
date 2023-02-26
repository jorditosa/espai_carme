import { useState } from "react";
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

function Contacte() {
    const [t, i18n] = useTranslation("global");

    const [ user, setUser ] = useState({
        name: '',
        email: '',
    })

    const { name, email } = user

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(user).includes('')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${t("footer.alert")}`,
              })
            return
        }
    }

  return (
    <section className="w-full">

        <form 
        action="https://getform.io/f/a8caeb14-6d9c-4672-9931-5d23131bd367" 
        method='POST' 
        className="flex flex-col justify-center items-center text-dark mx-2 md:mx-0 font-Roboto"
        onSubmit={handleSubmit}
        >
            <h2 className="font-bold uppercase text-lg text-center">
                {t("footer.contact-title")}
            </h2>
            <p>{t("footer.contact-text")}</p>
            <div className="w-full py-4">
                <input 
                name="nom"
                id="name"
                placeholder={t("footer.contact-name")}
                className="w-full text-dark pl-4 my-2 py-3 border-3 rounded-lg shadow-secondary/75 shadow-md focus:outline-secondary"
                value={name} 
                onChange={(e) => setUser({...user, name: e.target.value})}
                />
            </div>
            <div className="w-full py-4">
                <input 
                name="email"
                id="email"
                placeholder={t("footer.contact-email")}
                className="w-full text-dark pl-4 my-2 py-3 border-3 rounded-lg shadow-secondary/75 shadow-md focus:outline-secondary" 
                value={email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />
            </div>
            <div className="w-full py-4">
                <textarea 
                name="missatge"
                id="message"
                placeholder={t("footer.contact-message")}
                className="w-full text-dark pl-4 my-2 py-3 border-3 rounded-lg shadow-secondary/75 shadow-md outline-none border-none focus:outline-secondary focus:border-none" 
                />
            </div>

            <button type="submit" className="w-full cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-lg py-2 px-4 font-bold text-md lg:text-xl mt-4 transition-all ease-in-out duration-200">{t("footer.contact-button")}</button>
            
        </form>
        
    </section>
  )
}

export default Contacte