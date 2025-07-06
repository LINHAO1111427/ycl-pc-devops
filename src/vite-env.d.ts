/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    // 如果还有其他环境变量，也可以按下面格式添加：
    // readonly VITE_OTHER_ENV: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
