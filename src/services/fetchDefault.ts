import { showAlert } from "@/helpers/showAlert"


export const fetchDefault = async (url: string, init: RequestInit, resolve: (arg: []) => void, reject: (error:Error) => void) => {
    return fetch(url, {
        method: 'GET',
        ...init
    })
        .then(async (res) => {
            switch (res.status) {
                case 200:
                    let response = await res.json()
                    return resolve(response)
                    break
                case 201:
                    showAlert({
                        type: 'success',
                        title: 'Creado',
                        description: 'Datos creados exitosamente',
                    })
                    let request = await res.json()
                    return resolve(request)
                    break
                case 400:
                    showAlert({ type: "error", title: 'Datos Incorrectos', description: 'Por Favor verifique su usuario y contraseña' })
                    break
                case 401:
                    showAlert({ type: "error", title: 'Datos Incorrectos', description: 'Por Favor verifique su usuario y contraseña' })
                    break
                case 403:
                    showAlert({ type: "error", title: 'No es permitido', description: 'No tienes permiso para ejecutar esta opción' })
                    break

                case 404:
                    showAlert({ type: "error", title: 'Datos Incorrectos', description: 'Por Favor Intentelo mas tarde' })
                    break
                    case 500:
                    showAlert({ type: "error", title: 'Error de servidor', description: 'Error de servidor' })
                    break
                default:
                    showAlert({ type: "error", title: 'Error Inesperado', description: 'Por favor vuelva a intentarlo' })
                    break
            }
        })
        .catch(async (error) => {
            reject(error)
        })

}