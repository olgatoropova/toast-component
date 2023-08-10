import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const dismissAllToasts = React.useCallback(() => {
		setToasts([]);
	}, []);
	useEscapeKey(dismissAllToasts);

	function dismissToast(id) {
		const newToasts = toasts.filter((toast) => toast.id !== id);
		setToasts(newToasts);
	}

	function addToast(variant, message) {
		const id = crypto.randomUUID();
		const newToasts = [{ id, variant, message }, ...toasts];
		setToasts(newToasts);
	}

	return (
		<ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
			{children}
		</ToastContext.Provider>
	);
}

function useEscapeKey(callback) {
	React.useEffect(() => {
		function handleKeyDown(e) {
			if (e.code === 'Escape') {
				callback();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [callback]);
}

export default ToastProvider;
