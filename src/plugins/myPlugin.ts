import { dataBox } from 'js-tool-big-box';
import { ElMessage } from 'element-plus'

export default {
	install(app, options) {
		//复制
		app.config.globalProperties.$copyText = function (text) {
			if (navigator.clipboard && window.isSecureContext) {  // 只能在安全域下使用 安全域包括本地访问与开启TLS安全认证的地址，如 https 协议的地址、127.0.0.1 或 localhost
				// navigator clipboard 向剪贴板写文本
				navigator.clipboard
					.writeText(text)
					.then(() => {
						ElMessage({
							type: 'success',
							message: '复制成功'
						})
					})
					.catch((err) => {
						ElMessage({
							type: 'error',
							message: '复制异常，请尝试其他方式复制内容'
						})
					});
			} else {
				// 创建text area
				let textArea = document.createElement("textarea");
				textArea.value = text;
				// 使text area不在viewport，同时设置不可见
				textArea.style.position = "absolute";
				textArea.style.opacity = 0;
				textArea.style.left = "-999999px";
				textArea.style.top = "-999999px";
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();

				return new Promise((res, rej) => {
					// 执行复制命令并移除文本框
					document.execCommand("copy") ? res() : rej();
					textArea.remove();
				}).then(() => {
					ElMessage.success({
						message: "复制成功",
						type: "success",
					});
				}).catch((err) => {
					ElMessage({
						type: 'error',
						message: '复制异常，请尝试其他方式复制内容'
					})
				});
			}
			// try {
			//   navigator.clipboard.writeText(text);
			//   ElMessage({
			//   		type: 'success',
			//   		message: '复制成功'
			//   	})
			// } catch (error) {
			//   ElMessage({
			// 	  type: 'error',
			// 	  message: '复制异常，请尝试其他方式复制内容'
			//   })
			// }
			// dataBox.copyText(text, () => {
			// 	ElMessage({
			// 		type: 'success',
			// 		message: '复制成功'
			// 	})
			// 	}, () => {
			// 	ElMessage({
			// 		type: 'error',
			// 		message: '复制异常，请尝试其他方式复制内容'
			// 	})
			// })
		};
	}
};