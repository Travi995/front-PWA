// toastService.ts

import toast from "react-hot-toast"

// Función genérica para mostrar alertas


type tpAlertSystem = {

	type: 'success' | 'info' | 'warn' | 'error'
	title: string
	description?: string
	timeLife?: number

}

export const showAlert = ({ type, title, description, timeLife = 4000 }: tpAlertSystem) => {

	switch (type) {
		case 'success':
			toast.success(<div className="w-full ">
							<span className="capitalize font-semibold">{title}</span>
							<p className="text-xs pl-1 ">{description}</p>
						</div>, {

							duration: timeLife
						})
			break
		case 'info':
			toast(<div className="w-full ">
					<span className="capitalize font-semibold">{title}</span>
					<p className="text-xs pl-1 ">{description}</p>
				</div>, {
					icon: '💡',
					duration: timeLife
				})
			break
		case 'warn':
			toast(<div className="w-full ">
					<span className="capitalize font-semibold">{title}</span>
					<p className="text-xs pl-1 ">{description}</p>
				</div>, {
					icon: '⚠️',
					duration: timeLife
				})
			break
		case 'error':
			toast.error(<div className="w-full ">
							<span className="capitalize font-semibold">{title}</span>
							<p className="text-xs pl-1 ">{description}</p>
						</div>, {
							duration: timeLife
						})
			break
	}


}