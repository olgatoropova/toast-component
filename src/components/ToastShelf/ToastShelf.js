import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, dismissToast }) {
	return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast toast={toast} dismissToast={dismissToast} />
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
