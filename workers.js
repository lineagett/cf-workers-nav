const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="zh-CN" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Tab - 我的导航</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>⭐</text></svg>">
    <link rel="preconnect" href="https://api.xinac.net">
    <link rel="dns-prefetch" href="https://api.xinac.net">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        glass: {
                            border: 'rgba(255, 255, 255, 0.2)',
                            darkBorder: 'rgba(255, 255, 255, 0.1)',
                        }
                    },
                    animation: {
                        'blob': 'blob 15s infinite',
                    },
                    keyframes: {
                        blob: {
                            '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
                            '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
                            '66%': { transform: 'translate(-15px, 15px) scale(0.95)' },
                        }
                    },
                }
            }
        }
    </script>
    <style>
        .animate-blob {
            will-change: transform;
            backface-visibility: hidden;
            transform-style: preserve-3d;
        }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(156, 163, 175, 0.3); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(156, 163, 175, 0.6); }

        @media (max-width: 640px) {
            ::-webkit-scrollbar { display: none; }
            * { scrollbar-width: none; /* Firefox */ }
        }
        
        .animate-blob {
            will-change: transform;
            transform: translateZ(0);
        }

        .card {
            will-change: transform, opacity;
        }

        .card.dragging {
            opacity: 0.8;
            transform: scale(1.05);
            border: 2px dashed #10b981;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            z-index: 50;
            position: relative;
        }

        .edit-mode .card {
            /* touch-action: none; */  
            touch-action: pan-y;
        }

        body.edit-mode .card,
        body.edit-mode .card:hover {
            transform: none !important;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important; 
        }
        
        html.dark body.edit-mode .card,
        html.dark body.edit-mode .card:hover {
            box-shadow: none !important;
            border-color: rgba(51, 65, 85, 0.5) !important;
        }

        .add-card-placeholder {
            pointer-events: auto !important;
            z-index: 10;
        }
        
        .card-clone-dragging {
            pointer-events: none !important; /* 关键：让触摸穿透克隆体 */
            z-index: 9999 !important;
        }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .dropdown-enter {
            animation: dropdown-in 0.2s ease-out forwards;
        }
        @keyframes dropdown-in {
            from { opacity: 0; transform: translateY(-10px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .overlay-hidden {
            opacity: 0;
            pointer-events: none;
        }
        .overlay-visible {
            opacity: 1;
            pointer-events: auto;
        }
        .dialog-scale-hidden {
            transform: scale(0.95);
            opacity: 0;
        }
        .dialog-scale-visible {
            transform: scale(1);
            opacity: 1;
        }

        .section-anchor {
            scroll-margin-top: 160px;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
            -webkit-transition: background-color 99999s ease-out;
            -webkit-transition-delay: 99999s;
            -webkit-text-fill-color: #475569 !important; 
        }

        html.dark input:-webkit-autofill,
        html.dark input:-webkit-autofill:hover, 
        html.dark input:-webkit-autofill:focus, 
        html.dark input:-webkit-autofill:active {
            -webkit-text-fill-color: #CBD5E1 !important;
            box-shadow: 0 0 0px 1000px #1e293b inset !important;
            transition: background-color 5000s ease-in-out 0s;
        }
        
        #custom-tooltip {
            z-index: 100;
            transition: opacity 0.1s ease-in-out;
        }
    </style>
    <script>
        (function () {
            let isDark;
            const savePreferences = localStorage.getItem('savePreferences');
            if (savePreferences === 'true') {
                const savedTheme = localStorage.getItem('theme');
                isDark = savedTheme === 'dark';
            } else {
                const hour = new Date().getHours();
                isDark = (hour >= 21 || hour < 6);
            }
            window.isDarkTheme = isDark;
            if (isDark) document.documentElement.classList.add('dark');
        })();
    </script>
</head>

<body class="min-h-screen font-sans text-slate-800 dark:text-slate-100 selection:bg-emerald-200 dark:selection:bg-emerald-900 transition-colors duration-300">
    
    <!-- 背景层 -->
    <div class="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-gray-100 dark:bg-[#0f172a]">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#0f172a] dark:to-[#1e293b]"></div>
        <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-200/30 dark:bg-indigo-900/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 dark:bg-purple-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
    </div>

    <!-- 顶部固定导航 -->
    <div class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="backdrop-blur-xl bg-gray-100/60 dark:bg-[#0f172a]/60 border-b border-slate-200/40 dark:border-slate-700/40 shadow-sm supports-[backdrop-filter]:bg-gray-100/70">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 gap-4">
                    
                    <!-- Logo -->
                    <a class="flex items-center gap-2 flex-shrink-0 group cursor-pointer bg-white/50 dark:bg-transparent hover:bg-white dark:hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/50 dark:border-transparent transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5" href="#" onclick="location.reload()">
                        <div class="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-lg text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </div>
                        <span class="font-bold text-lg tracking-wide text-slate-700 dark:text-slate-100 hidden sm:block">我的导航</span>
                    </a>

                    <!-- Search Bar -->
                    <div class="flex-1 max-w-2xl mx-auto">
                        <div class="relative flex items-center w-full h-10 rounded-xl focus-within:ring-2 focus-within:ring-emerald-500/50 focus-within:shadow-lg focus-within:-translate-y-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300">
                            
                            <!-- Custom Search Engine Dropdown -->
                            <div class="relative h-full" id="search-engine-wrapper">
                                <button id="search-engine-btn" class="h-full pl-3 pr-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-l-xl transition-colors outline-none w-auto md:min-w-[5.5rem]">
                                    <!-- 默认显示本站图标 -->
                                    <span id="current-engine-icon" class="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </span>
                                    <span id="current-engine-label" class="font-medium truncate hidden md:block">本站</span>
                                    <svg class="w-3 h-3 opacity-60 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                
                                <!-- Dropdown Menu -->
                                <div id="search-engine-menu" class="hidden absolute top-full left-0 mt-2 w-24 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50 dropdown-enter">
                                    <div class="py-1" id="search-engine-list">
                                        <div class="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">搜索引擎</div>
                                        <!-- JS 自动插入按钮 -->
                                    </div>
                                </div>
                            </div>

                            <div class="h-4 w-px bg-slate-200 dark:bg-slate-600 mx-1"></div>
                            
                            <input type="text" id="search-input" class="flex-1 bg-transparent border-none text-slate-700 dark:text-slate-200 text-sm focus:ring-0 placeholder-slate-400 h-full w-full outline-none px-2" placeholder="搜索">
                            
                            <button id="clear-search-button" class="hidden p-1.5 mr-1 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
                                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                            </button>
                            
                            <button id="search-button" class="h-full px-4 rounded-r-xl text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-700/50 transition-colors border-l border-transparent dark:border-slate-700/50 flex items-center justify-center">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Profile / Settings -->
                    <div class="relative flex items-center gap-2">
                        <div id="profile-dropdown-wrapper" class="relative">
                            <button id="profile-menu-toggle" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all text-sm font-medium border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm">
                                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center shadow-inner">
                                     <svg class="w-4 h-4 text-slate-500 dark:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <span id="menu-toggle" class="hidden md:inline">设置</span>
                            </button>
                            
                            <!-- Dropdown Menu -->
                            <div id="profile-dropdown" class="hidden absolute right-0 mt-2 w-60 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform origin-top-right transition-all z-50 dropdown-enter">
                                <div class="p-2 space-y-1">
                                    <!-- Edit Mode -->
                                    <button id="edit-mode-btn" onclick="toggleEditMode()" class="w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700/50 hover:text-emerald-600 transition-colors flex items-center gap-3 font-medium">
                                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                        编辑模式
                                    </button>
                                    
                                    <!-- 导入导出 (仅登录显示) -->
                                    <div id="data-tools-menu" class="hidden border-t border-slate-100 dark:border-slate-700/50 my-1 pt-1">
                                         <button onclick="exportData()" class="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-700/50 hover:text-amber-600 transition-colors flex items-center gap-3">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                            导出配置
                                        </button>
                                        <button onclick="importData()" class="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-green-50 dark:hover:bg-slate-700/50 hover:text-green-600 transition-colors flex items-center gap-3">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"></path></svg>
                                            导入配置
                                        </button>
                                        <!-- 文件输入框 (隐藏) -->
                                        <input type="file" id="import-file-input" accept=".json" class="hidden">
                                    </div>
                                    
                                    <div class="h-px bg-slate-100 dark:bg-slate-700/50 mx-1 my-1"></div>

                                    <!-- 【新增】APP 布局切换 -->
                                    <div class="px-3 py-2.5 flex items-center justify-between text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/30 rounded-lg group">
                                        <span class="flex items-center gap-3">
                                            <svg class="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                                            </svg>
                                            APP 视图
                                        </span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="layout-switch-checkbox" onchange="toggleAppLayout()" class="sr-only peer">
                                            <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                                        </label>
                                    </div>
                                    
                                    <div class="px-3 py-2.5 flex items-center justify-between text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/30 rounded-lg group">
                                        <span class="flex items-center gap-3">
                                            <svg class="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                            深色模式
                                        </span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="theme-switch-checkbox" class="sr-only peer">
                                            <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                                        </label>
                                    </div>
                                    <div class="px-3 py-2.5 flex items-center justify-between text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/30 rounded-lg group">
                                        <span class="flex items-center gap-3">
                                            <svg class="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                            记住设置
                                        </span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="save-preference-checkbox" class="sr-only peer">
                                            <div class="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                                        </label>
                                    </div>
                                    <div class="h-px bg-slate-100 dark:bg-slate-700/50 mx-1 my-1"></div>
                                    <button id="login-Btn" onclick="toggleLogin()" class="w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors flex items-center gap-3 font-medium">
                                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                                        登录 / 退出
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 快捷分类栏 -->
                <div id="category-buttons-container" class="py-2 flex gap-2 overflow-x-auto no-scrollbar mask-gradient items-center">
                    <!-- JS 生成按钮 -->
                </div>
            </div>
        </div>
    </div>

    <!-- 主要内容区 -->
    <main class="pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <!-- 添加分类按钮 (仅编辑模式显示) -->
        <div id="add-category-container" class="hidden mt-12 mb-8">
            <button onclick="addCategory()" class="w-full py-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2 group">
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 flex items-center justify-center transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                </div>
                <span class="font-medium text-lg">新建分类</span>
            </button>
        </div>

        <!-- 内容渲染容器 -->
        <div id="sections-container" class="space-y-10"></div>

        <!-- 返回顶部按钮独立放置 -->
        <div class="fixed bottom-8 right-8 z-50">
            <button id="back-to-top-btn" onclick="scrollToTop()" class="hidden w-12 h-12 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-lg backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 hover:bg-slate-50 dark:hover:bg-slate-700 has-tooltip group" data-tooltip="返回顶部">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
        </div>
        
    </main>

    <!-- 模态框：添加/编辑链接 -->
    <div id="dialog-overlay" class="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden">
        <div id="dialog-box" class="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all duration-300 border border-slate-100 dark:border-slate-700 dialog-scale-hidden">
            <h3 class="text-xl font-bold mb-5 text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <span class="w-1 h-6 bg-emerald-500 rounded-full"></span>
                编辑信息
            </h3>
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">名称 <span class="text-red-500">*</span></label>
                    <input type="text" id="name-input" class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all dark:text-white" placeholder="网站名称">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">地址 <span class="text-red-500">*</span></label>
                    <input type="text" id="url-input" class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all dark:text-white" placeholder="https://...">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">描述</label>
                    <input type="text" id="tips-input" class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all dark:text-white" placeholder="简短的描述...">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">图标 URL</label>
                    <input type="text" id="icon-input" class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all dark:text-white" placeholder="留空自动获取">
                </div>
                
                <!-- Custom Category Dropdown -->
                <div class="relative z-20" id="category-select-wrapper">
                    <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">分类</label>
                    <input type="hidden" id="category-select-value">
                    <button id="category-select-btn" class="w-full px-4 py-2.5 text-left rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-slate-700 dark:text-white flex items-center justify-between">
                        <span id="category-select-text">请选择分类</span>
                        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown List -->
                    <div id="category-select-menu" class="hidden absolute top-full left-0 mt-2 w-full max-h-48 overflow-y-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-50 custom-scrollbar">
                        <!-- Items populated by JS -->
                    </div>
                </div>

                <div class="flex items-center gap-2 pt-2">
                    <input type="checkbox" id="private-checkbox" class="w-5 h-5 text-emerald-500 rounded focus:ring-emerald-500 border-gray-300 bg-gray-100">
                    <label for="private-checkbox" class="text-sm text-slate-600 dark:text-slate-300 font-medium">设为私密链接 (仅登录可见)</label>
                </div>
            </div>
            <div class="flex justify-end gap-3 mt-8">
                <button id="dialog-cancel-btn" class="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">取消</button>
                <button id="dialog-confirm-btn" class="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 transition-all hover:translate-y-[-1px]">确定</button>
            </div>
        </div>
    </div>

    <!-- 密码弹窗 -->
    <div id="password-dialog-overlay" class="fixed inset-0 z-[70] bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden">
        <div id="password-dialog-box" class="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-8 w-full max-w-sm border border-slate-100 dark:border-slate-700 text-center transform transition-all duration-300 dialog-scale-hidden">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-white">身份验证</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">请输入管理员密码以继续操作</p>
            <input type="password" id="password-input" placeholder="访问密码" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none mb-6 dark:text-white text-center tracking-widest text-lg transition-all">
            <div class="flex gap-3">
                <button id="password-cancel-btn" class="flex-1 py-2.5 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 font-medium transition-colors">取消</button>
                <button id="password-confirm-btn" class="flex-1 py-2.5 rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 font-medium transition-colors">确认登录</button>
            </div>
        </div>
    </div>

    <!-- 自定义 Alert -->
    <div id="custom-alert-overlay" class="fixed inset-0 z-[110] bg-slate-900/50 backdrop-blur-[2px] flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden">
        <div id="custom-alert-box" class="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-slate-100 dark:border-slate-700 transform transition-all duration-300 dialog-scale-hidden">
            <h3 id="custom-alert-title" class="text-lg font-bold mb-2 text-slate-800 dark:text-white">提示</h3>
            <p id="custom-alert-content" class="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed"></p>
            <div class="flex justify-end">
                <button id="custom-alert-confirm" class="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-sm font-medium transition-colors shadow-lg shadow-emerald-500/20">我知道了</button>
            </div>
        </div>
    </div>

    <!-- 自定义 Confirm -->
    <div id="custom-confirm-overlay" class="fixed inset-0 z-[80] bg-slate-900/50 backdrop-blur-[2px] flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden">
        <div id="custom-confirm-box" class="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl p-6 max-w-sm w-full border border-slate-100 dark:border-slate-700 transform transition-all duration-300 dialog-scale-hidden">
            <h3 class="text-lg font-bold mb-3 text-slate-800 dark:text-white">确认操作</h3>
            <p id="custom-confirm-message" class="text-slate-600 dark:text-slate-300 mb-6 text-sm"></p>
            <div class="flex justify-end gap-3">
                <button id="custom-confirm-cancel" class="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-xl dark:text-slate-400 dark:hover:bg-slate-700 transition-colors font-medium">取消</button>
                <button id="custom-confirm-ok" class="px-4 py-2 text-sm text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/20 transition-colors font-medium">确定</button>
            </div>
        </div>
    </div>

    <!-- 分类输入弹窗 -->
    <div id="category-dialog" class="fixed inset-0 z-[65] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden">
        <div id="category-dialog-box" class="bg-white dark:bg-[#1e293b] rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-slate-100 dark:border-slate-700 transform transition-all duration-300 dialog-scale-hidden">
            <h3 id="category-dialog-title" class="text-lg font-bold mb-4 text-slate-800 dark:text-white">分类名称</h3>
            <input type="text" id="category-name-input" class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-emerald-500 outline-none mb-6 dark:text-white transition-all" placeholder="输入分类名称">
            <div class="flex justify-end gap-3">
                <button id="category-cancel-btn" class="px-4 py-2 text-sm rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 font-medium">取消</button>
                <button id="category-confirm-btn" class="px-4 py-2 text-sm rounded-xl text-white bg-emerald-500 hover:bg-emerald-600 shadow-md font-medium">确定</button>
            </div>
        </div>
    </div>

    <!-- Loading Mask (z-index 100) -->
    <div id="loading-mask" class="fixed inset-0 z-[100] bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hidden flex flex-col items-center justify-center transition-opacity">
        <div class="relative w-16 h-16">
            <div class="absolute inset-0 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
            <div class="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p class="mt-4 text-emerald-600 dark:text-emerald-400 font-medium animate-pulse tracking-wide">加载中...</p>
    </div>

    <!-- Tooltip Container -->
    <div id="custom-tooltip" class="fixed hidden pointer-events-none max-w-xs whitespace-pre-wrap border leading-relaxed tracking-wide backdrop-blur-md rounded-xl shadow-glass px-4 py-2 text-sm transition-opacity duration-150
        bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border-slate-200/50 dark:border-slate-700/50">
    </div>

    <script>
    // ============================================
    // 全局状态
    // ============================================
    let isEditMode = false;
    let isLoggedIn = false;
    let isAppLayout = localStorage.getItem('appLayout') === 'true';

    let editCardMode = false;
    let isEditCategoryMode = false;

    const categories = {};
    let currentEngine;
    let initialDragState = { category: null, index: -1 };
    let scrollObserver = null;
    let animationFrameId = null;

    const iconCache = new Map();
    
    // DOM 元素缓存 (延迟初始化)
    let domCache = null;
    
    function getDom() {
        if (!domCache) {
            domCache = {
                themeSwitchCheckbox: document.getElementById('theme-switch-checkbox'),
                layoutSwitchCheckbox: document.getElementById('layout-switch-checkbox'),
                savePrefCheckbox: document.getElementById('save-preference-checkbox'),
                searchButton: document.getElementById('search-button'),
                searchInput: document.getElementById('search-input'),
                clearSearchButton: document.getElementById('clear-search-button'),
                menuToggleBtn: document.getElementById('profile-menu-toggle'),
                dropdown: document.getElementById('profile-dropdown'),
                dropdownWrapper: document.getElementById('profile-dropdown-wrapper'),
                backToTopBtn: document.getElementById('back-to-top-btn'),
                searchEngineWrapper: document.getElementById('search-engine-wrapper'),
                searchEngineBtn: document.getElementById('search-engine-btn'),
                searchEngineMenu: document.getElementById('search-engine-menu'),
                categorySelectWrapper: document.getElementById('category-select-wrapper'),
                categorySelectBtn: document.getElementById('category-select-btn'),
                categorySelectMenu: document.getElementById('category-select-menu'),
                sectionsContainer: document.getElementById('sections-container'),
                categoryButtonsContainer: document.getElementById('category-buttons-container'),
                currentEngineLabel: document.getElementById('current-engine-label'),
                currentEngineIcon: document.getElementById('current-engine-icon'),
            };
        }
        return domCache;
    }

    function toggleAppLayout() {
        isAppLayout = !isAppLayout;
        localStorage.setItem('appLayout', isAppLayout);
        
        const checkbox = document.getElementById('layout-switch-checkbox');
        if (checkbox) checkbox.checked = isAppLayout;

        loadSections();
    }

    function logAction(action, details) {
        console.log(\`\${new Date().toISOString()}: \${action} - \`, details);
    }

    // 搜索引擎
    const searchEngines = {
        baidu: "https://www.baidu.com/s?wd=",
        bing: "https://www.bing.com/search?q=",
        google: "https://www.google.com/search?q=",
        site: ""
    };
    
    // 搜索引擎显示名称映射
    const searchEngineLabels = {
        baidu: "百度",
        bing: "必应",
        google: "谷歌",
        site: "本站"
    };

    // 搜索引擎图标映射 (SVG路径)
    const searchEngineIcons = {
        site:   '<svg width="16" height="16" fill="#FFD700" stroke="#FFD700" viewBox="0 0 24 24"><path fill="#FFD700" stroke="#FFD700" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
        baidu:  '<svg width="16" height="16" viewBox="0 0 32 32"><path fill="#4285F4" d="M5.749 16.864c3.48-.744 3-4.911 2.901-5.817c-.172-1.401-1.823-3.853-4.057-3.656c-2.812.249-3.224 4.323-3.224 4.323c-.385 1.88.907 5.901 4.38 5.151zm6.459-6.984c1.923 0 3.475-2.213 3.475-4.948C15.683 2.213 14.136 0 12.214 0c-1.916 0-3.479 2.197-3.479 4.932s1.557 4.948 3.479 4.948zm8.281.328c2.573.344 4.213-2.401 4.547-4.479c.333-2.068-1.333-4.484-3.145-4.896c-1.823-.421-4.079 2.5-4.307 4.401c-.24 2.333.333 4.651 2.895 4.979zm10.178 3.505c0-.995-.817-3.995-3.88-3.995c-3.057 0-3.48 2.828-3.48 4.828c0 1.907.157 4.563 3.98 4.48c3.807-.095 3.391-4.319 3.391-5.319zm-3.864 8.714s-3.985-3.077-6.303-6.4c-3.145-4.901-7.62-2.907-9.115-.423c-1.489 2.511-3.812 4.084-4.14 4.505c-.333.412-4.797 2.823-3.803 7.224c1 4.401 4.479 4.323 4.479 4.323s2.557.251 5.548-.416c2.984-.667 5.547.161 5.547.161s6.943 2.333 8.864-2.147c1.896-4.495-1.083-6.812-1.083-6.812z"/></svg>',
        bing:   '<svg width="16" height="16" viewBox="0 0 32 32"><path fill="#008373" d="m4.807 0l6.391 2.25v22.495l9.005-5.193l-4.411-2.073l-2.786-6.932l14.188 4.984v7.245L11.204 32l-6.396-3.563z"/></svg>',
        google: '<svg width="16" height="16" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>'
    };

    const engineList = ['site', 'baidu', 'bing', 'google'];

    function renderSearchEngineMenu() {
        const container = document.getElementById('search-engine-list');
        const title = container.querySelector('div');
        container.innerHTML = '';
        container.appendChild(title);

        engineList.forEach(key => {
            const label = searchEngineLabels[key];
            const icon = searchEngineIcons[key];
            
            const btn = document.createElement('button');
            btn.className = "w-full text-left px-3 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-3";
            btn.onclick = () => selectSearchEngine(key, label);
            
            btn.innerHTML = \`\${icon}<span>\${label}</span>\`;
            
            container.appendChild(btn);
        });
    }

    function setActiveEngine(engine) {
        if (!searchEngines.hasOwnProperty(engine) && engine !== 'site') engine = 'site';
        selectSearchEngine(engine, searchEngineLabels[engine]);
    }

    // ============================================
    // DOM 元素缓存 (全局)
    // ============================================
    const DOM = {};
    
    function cacheDOM() {
        DOM.themeSwitchCheckbox = document.getElementById('theme-switch-checkbox');
        DOM.layoutSwitchCheckbox = document.getElementById('layout-switch-checkbox');
        DOM.savePrefCheckbox = document.getElementById('save-preference-checkbox');
        DOM.searchButton = document.getElementById('search-button');
        DOM.searchInput = document.getElementById('search-input');
        DOM.clearSearchButton = document.getElementById('clear-search-button');
        DOM.menuToggleBtn = document.getElementById('profile-menu-toggle');
        DOM.dropdown = document.getElementById('profile-dropdown');
        DOM.dropdownWrapper = document.getElementById('profile-dropdown-wrapper');
        DOM.backToTopBtn = document.getElementById('back-to-top-btn');
        DOM.searchWrapper = document.getElementById('search-engine-wrapper');
        DOM.searchEngineBtn = document.getElementById('search-engine-btn');
        DOM.searchEngineMenu = document.getElementById('search-engine-menu');
        DOM.catWrapper = document.getElementById('category-select-wrapper');
        DOM.catBtn = document.getElementById('category-select-btn');
        DOM.catMenu = document.getElementById('category-select-menu');
        DOM.sectionsContainer = document.getElementById('sections-container');
        DOM.categoryButtonsContainer = document.getElementById('category-buttons-container');
        DOM.currentEngineLabel = document.getElementById('current-engine-label');
        DOM.currentEngineIcon = document.getElementById('current-engine-icon');
        DOM.tooltip = document.getElementById('custom-tooltip');
    }
    
    function setupGlobalDelegation() {
        // 1. 卡片点击 (打开链接)
        DOM.sectionsContainer.addEventListener('click', (e) => {
            if (isEditMode) return;
            const card = e.target.closest('.card');
            // 确保不是点击了卡片内的按钮（如编辑模式的菜单）
            if (card && !e.target.closest('button') && !e.target.closest('.card-menu-dropdown')) {
                const urlAttr = card.getAttribute('data-url');
                if (urlAttr) {
                    let url = urlAttr.startsWith('http') ? urlAttr : 'http://' + urlAttr;
                    window.open(url, '_blank');
                }
            }
        });

        // 2. 移动端拖拽 (TouchStart)
        DOM.sectionsContainer.addEventListener('touchstart', (e) => {
             // 只有在 card 上触发时才处理
             if(isEditMode && e.target.closest('.card')) {
                 touchStart(e);
             }
        }, { passive: false });
    }

    function updateSearchEngineUI(value) {
        const label = searchEngineLabels[value] || "本站";
        const icon = searchEngineIcons[value] || searchEngineIcons['site'];
        
        if (DOM.currentEngineLabel) DOM.currentEngineLabel.textContent = label;
        if (DOM.currentEngineIcon) DOM.currentEngineIcon.innerHTML = icon;
    }

    document.addEventListener('DOMContentLoaded', async () => {
        cacheDOM();
        setupGlobalDelegation();
        initializeUIComponents();
        renderSearchEngineMenu();
        await checkLoginStatusAndLoad();
    });

    async function checkLoginStatusAndLoad() {
        const isValid = await validateToken();
        if (isValid) {
            isLoggedIn = true;
        } else {
            isLoggedIn = false;
            isEditMode = false;
        }
        await loadLinks();
    }

    function initializeUIComponents() {
        DOM.themeSwitchCheckbox.checked = document.documentElement.classList.contains('dark');
        DOM.themeSwitchCheckbox.addEventListener('change', (e) => {
            const isDark = e.target.checked;
            window.isDarkTheme = isDark;
            applyTheme(isDark);
            
            if (DOM.savePrefCheckbox && DOM.savePrefCheckbox.checked) {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            }
        });

        if(DOM.layoutSwitchCheckbox) {
            DOM.layoutSwitchCheckbox.checked = isAppLayout;
        }
        
        const savedPref = localStorage.getItem('savePreferences') === 'true';
        DOM.savePrefCheckbox.checked = savedPref;

        currentEngine = (savedPref && localStorage.getItem('searchEngine')) || 'site';
        updateSearchEngineUI(currentEngine);
        
        DOM.searchEngineBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            DOM.searchEngineMenu.classList.toggle('hidden');
        });
        
        DOM.catBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            DOM.catMenu.classList.toggle('hidden');
        });

        const toggleDropdown = () => {
            DOM.dropdown.classList.toggle('hidden');
        };

        DOM.menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown();
        });

        document.addEventListener('click', (e) => {
            if (!DOM.dropdownWrapper.contains(e.target)) {
                 DOM.dropdown.classList.add('hidden');
            }
            if (!DOM.searchWrapper.contains(e.target)) {
                DOM.searchEngineMenu.classList.add('hidden');
            }
            if (!DOM.catWrapper.contains(e.target)) {
                DOM.catMenu.classList.add('hidden');
            }
        });

        DOM.dropdown.addEventListener('click', (e) => { e.stopPropagation(); });

        DOM.savePrefCheckbox.addEventListener('change', () => {
            const enabled = DOM.savePrefCheckbox.checked;
            localStorage.setItem('savePreferences', enabled);
            if (!enabled) {
                localStorage.removeItem('searchEngine');
                localStorage.removeItem('theme');
            } else {
                localStorage.setItem('searchEngine', currentEngine);
                localStorage.setItem('theme', window.isDarkTheme ? 'dark' : 'light');
            }
        });

        DOM.searchButton.addEventListener('click', async () => {
            const query = DOM.searchInput.value.trim();
            if (query) {
                if (currentEngine === 'site') {
                    await searchLinks(query); 
                } else {
                    window.open(searchEngines[currentEngine] + encodeURIComponent(query), '_blank');
                }
            }
        });

        if (DOM.clearSearchButton) {
            DOM.clearSearchButton.addEventListener('click', () => {
                DOM.searchInput.value = '';
                loadSections(); 
            });
        }

        if (DOM.searchInput) {
            DOM.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') DOM.searchButton.click();
            });
            
            // 分离清除按钮显隐（快速响应）和搜索逻辑（防抖）
            DOM.searchInput.addEventListener('input', (e) => {
                const hasValue = e.target.value.length > 0;
                DOM.clearSearchButton.classList.toggle('hidden', !hasValue);
            });
        }
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                DOM.backToTopBtn.classList.remove('hidden');
            } else {
                DOM.backToTopBtn.classList.add('hidden');
            }
        }, { passive: true });
        
        setupScrollSpy();
        
        setupTooltipDelegation();
    }

    function selectSearchEngine(value, label) {
        currentEngine = value;
        updateSearchEngineUI(value);
        
        if (DOM.savePrefCheckbox && DOM.savePrefCheckbox.checked) {
            localStorage.setItem('searchEngine', value);
        }
        DOM.searchEngineMenu.classList.add('hidden');
    }


    function getAllLinks() {
        return Object.values(categories).map(category => category.links || []).flat();
    }
    
    async function loadLinks() {
        const headers = { 'Content-Type': 'application/json' };
        if (isLoggedIn) {
            const token = localStorage.getItem('authToken');
            if (token) headers['Authorization'] = token;
        }
        
        try {
            const response = await fetchWithAuth('/api/getLinks');
            if (!response.ok) throw new Error("HTTP error! status: " + response.status);
            
            const data = await response.json();
            if (data.categories) {
                Object.keys(categories).forEach(key => delete categories[key]);
                Object.assign(categories, data.categories);
            }

            loadSections();
            updateCategorySelect();
            updateUIState();
        } catch (error) {
            console.error('Error loading links:', error);
            await customAlert('加载链接时出错，请刷新页面重试');
        }
    }

    async function saveDataToServer(actionName, data) {
        try {
            const response = await fetchWithAuth('/api/saveData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ categories: data }),
            });

            if (response.status === 401) {
                logout();
                await customAlert('登录凭证已过期，请重新登录');
                throw new Error('Unauthorized');
            }

            const result = await response.json();
            if (!result.success) throw new Error('Failed to save');
            logAction(actionName + '成功', {});
        } catch (error) {
            logAction(actionName + '失败', { error: error.message });
            if (error.message !== 'Unauthorized') {
                 await customAlert(actionName + '失败，请重试');
            }
        }
    }

    async function saveLinks() {
        if (isEditMode) {
            await saveDataToServer('保存数据', categories);
        }
    }
    
    async function addCategory() {
        if (!await validateTokenOrRedirect()) return;
        const categoryName = await showCategoryDialog('请输入新分类名称');
        if (!categoryName) return;
        if (categories[categoryName]) {
            await customAlert('该分类已存在');
            return;
        }
        categories[categoryName] = { isHidden: false, links: [] };
        updateCategorySelect();
        renderCategories();
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
        await saveLinks();
    }

    async function editCategoryName(oldName) {
        if (!await validateTokenOrRedirect()) return;
        const newName = await showCategoryDialog('请输入新的分类名称', oldName);
        if (!newName || newName === oldName) return;
        if (categories[newName]) {
            await customAlert('该名称已存在');
            return;
        }

        const keys = Object.keys(categories);
        const newCategories = {};

        keys.forEach(key => {
            if (key === oldName) {
                const data = categories[oldName];
                data.links.forEach(item => item.category = newName);
                newCategories[newName] = data;
            } else {
                newCategories[key] = categories[key];
            }
        });

        Object.keys(categories).forEach(k => delete categories[k]);
        Object.assign(categories, newCategories);

        renderCategories();
        renderCategoryButtons();
        updateCategorySelect();
        await saveLinks();
    }

    async function deleteCategory(category) {
        if (!await validateTokenOrRedirect()) return;
        if (await customConfirm(\`确定删除 "\${category}" 分类及其所有链接吗？\`)) {
            delete categories[category];
            updateCategorySelect();
            renderCategories();
            renderCategoryButtons();
            await saveLinks();
        }
    } 
    
    async function moveCategory(categoryName, direction) {
        if (!await validateTokenOrRedirect()) return;
        const keys = Object.keys(categories);
        const index = keys.indexOf(categoryName);
        if (index < 0) return;
        const newIndex = index + direction;
        if (newIndex < 0 || newIndex >= keys.length) return;
    
        const newCategories = {};
        const reordered = [...keys];
        [reordered[index], reordered[newIndex]] = [reordered[newIndex], reordered[index]];
        reordered.forEach(key => newCategories[key] = categories[key]);
        
        Object.keys(categories).forEach(k => delete categories[k]);
        Object.assign(categories, newCategories);
    
        renderCategories();
        renderCategoryButtons();
        await saveLinks(); 
    }

    async function toggleCategoryHidden(category, isHidden) {
        if (!await validateTokenOrRedirect()) return;
        categories[category].isHidden = isHidden;
        await saveLinks();
    }

    async function pinCategory(categoryName) {
        if (!await validateTokenOrRedirect()) return;
        const keys = Object.keys(categories);
        const index = keys.indexOf(categoryName);
        if (index < 0) return;
        
        const newCategories = {};
        const reordered = [...keys];
        reordered.splice(index, 1);
        reordered.unshift(categoryName);
        reordered.forEach(key => newCategories[key] = categories[key]);
        
        Object.keys(categories).forEach(k => delete categories[k]);
        Object.assign(categories, newCategories);
        
        renderCategories();
        renderCategoryButtons();
        await saveLinks();
    }
    
    function getFilteredCategoriesByKeyword(query) {
        const lowerQuery = query.toLowerCase();
        const result = {};
        Object.keys(categories).forEach(category => {
            const categoryData = categories[category];
            const matchedLinks = (categoryData.links || []).filter(link => {
                const nameMatch = link.name && link.name.toLowerCase().includes(lowerQuery);
                const tipsMatch = link.tips && link.tips.toLowerCase().includes(lowerQuery);
                const urlMatch = link.url && link.url.toLowerCase().includes(lowerQuery);
                return nameMatch || tipsMatch || urlMatch;
            });
            if (matchedLinks.length > 0) {
                result[category] = { ...categoryData, links: matchedLinks };
            }
        });
        return result;
    }

    function renderCategorySections({ renderButtons = false, searchMode = false, filteredCategories = null } = {}) {
        const container = document.getElementById('sections-container');

        const fragment = document.createDocumentFragment();
        const sourceCategories = searchMode && filteredCategories ? filteredCategories : categories;

        Object.entries(sourceCategories).forEach(([category, { links, isHidden }]) => {
            if (!isEditMode && !isLoggedIn && isHidden && !searchMode) return;

            const section = document.createElement('div');
            section.className = 'section section-anchor';
            section.id = category;

            // 标题区域
            const titleContainer = document.createElement('div');
            titleContainer.className = 'flex items-center gap-3 mb-5 pb-2 border-b border-slate-200/60 dark:border-slate-700/60';
            
            const title = document.createElement('h2');
            title.className = 'text-lg font-bold text-slate-700 dark:text-slate-100 flex items-center gap-2';
            title.innerHTML = \`<span class="w-1.5 h-5 bg-emerald-500 rounded-full inline-block shadow-sm"></span> \${category}\`;
            titleContainer.appendChild(title);

            // 编辑模式下的标题栏操作
            if (isEditMode) {
                const controls = document.createElement('div');
                controls.className = 'flex items-center gap-1 ml-auto bg-slate-300/50 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-300/50 dark:border-slate-700/50 backdrop-blur-sm';
                const btnBase = "w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 active:scale-95";
                
                controls.innerHTML = \`
                    <!-- 编辑名称 -->
                    <button class="\${btnBase} text-slate-500 hover:text-blue-600 hover:bg-blue-100 dark:text-slate-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 has-tooltip" data-tooltip="重命名" onclick="editCategoryName('\${category}')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    
                    <div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-0.5"></div>

                    <!-- 排序组 -->
                    <button class="\${btnBase} text-slate-500 hover:text-emerald-600 hover:bg-emerald-100 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 has-tooltip" data-tooltip="上移" onclick="moveCategory('\${category}', -1)">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    </button>
                    <button class="\${btnBase} text-slate-500 hover:text-emerald-600 hover:bg-emerald-100 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 has-tooltip" data-tooltip="下移" onclick="moveCategory('\${category}', 1)">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <button class="\${btnBase} text-slate-500 hover:text-amber-600 hover:bg-amber-100 dark:text-slate-400 dark:hover:bg-amber-900/30 dark:hover:text-amber-400 has-tooltip" data-tooltip="置顶" onclick="pinCategory('\${category}')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h14M18 13l-6-6l-6 6M12 7v14"></path></svg>
                    </button>

                    <div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-0.5"></div>

                    <!-- 隐藏开关 -->
                    <div class="flex items-center justify-center w-8 h-8 has-tooltip cursor-pointer" data-tooltip="\${isHidden ? '显示分类' : '隐藏分类'}">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <!-- 下面这一行增加了 DOM 属性更新逻辑 -->
                            <input type="checkbox" \${isHidden ? 'checked' : ''} 
                                onchange="this.closest('.has-tooltip').setAttribute('data-tooltip', this.checked ? '显示分类' : '隐藏分类'); toggleCategoryHidden('\${category}', this.checked)" 
                                class="sr-only peer">
                            <div class="w-3.5 h-3.5 rounded-full border-2 border-slate-400 peer-focus:outline-none peer dark:border-slate-500 peer-checked:bg-slate-500 peer-checked:border-slate-500 transition-colors"></div>
                        </label>
                    </div>

                    <div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-0.5"></div>

                    <!-- 删除 -->
                    <button class="\${btnBase} text-slate-400 hover:text-red-600 hover:bg-red-100 dark:text-slate-500 dark:hover:bg-red-900/30 dark:hover:text-red-400 has-tooltip" data-tooltip="删除分类" onclick="deleteCategory('\${category}')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                \`;
                titleContainer.appendChild(controls);
            }

            // 卡片网格
            const cardContainer = document.createElement('div');
            // 根据布局模式调整 Grid 列数
            // APP 模式下，手机端一行4个，平板6个，大屏8-10个
            const gridClasses = isAppLayout 
                ? 'grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-2 gap-y-6' 
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4';
            
            cardContainer.className = \`grid \${gridClasses} card-container relative\`;
            cardContainer.id = category; // ID for drag logic

            section.appendChild(titleContainer);
            section.appendChild(cardContainer);
            container.appendChild(section);

            links.forEach(link => createCard(link, cardContainer));

            if (isEditMode) {
                const addCardPlaceholder = document.createElement('div');
                const sizeClasses = isAppLayout 
                    ? 'w-16 h-16 rounded-[1.2rem] mx-auto' 
                    : 'min-h-[100px] p-4 rounded-2xl w-full';
                
                addCardPlaceholder.className = \`add-card-placeholder group flex flex-col h-full w-full \${sizeClasses} rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all cursor-pointer flex items-center justify-center\`;
                addCardPlaceholder.innerHTML = \`
                    <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 flex items-center justify-center transition-colors pointer-events-none">
                        <svg class="w-6 h-6 text-slate-400 group-hover:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    </div>
                \`;
                
                addCardPlaceholder.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    const dragging = document.querySelector('.card.dragging');
                    if(dragging && dragging.parentElement === cardContainer) {
                        cardContainer.insertBefore(dragging, addCardPlaceholder);
                    }
                });
                
                addCardPlaceholder.onclick = () => {
                     showAddDialog();
                     document.getElementById('category-select-value').value = category;
                     document.getElementById('category-select-text').textContent = category;
                };
            cardContainer.appendChild(addCardPlaceholder);
            }
            fragment.appendChild(section);
        });

        container.innerHTML = '';
        container.appendChild(fragment);

        if (renderButtons) renderCategoryButtons();

        setupScrollSpy();
    }

    function renderCategories() {
        renderCategorySections({ renderButtons: false });
    } 

    async function searchLinks(query) {
        const filteredData = getFilteredCategoriesByKeyword(query);
        const hasMatchingLinks = Object.values(filteredData).some(c => c.links.length > 0);

        if (!hasMatchingLinks) {
            await customAlert('没有找到相关站点。');
            return;
        }
        if (DOM.clearSearchButton) DOM.clearSearchButton.classList.remove('hidden');
        renderCategorySections({ renderButtons: true, searchMode: true, filteredCategories: filteredData });
    }
    
    function renderCategoryButtons() {
        const container = DOM.categoryButtonsContainer || document.getElementById('category-buttons-container');
        container.innerHTML = '';
        const visibleCategories = Object.keys(categories).filter(c => 
            (categories[c].links || []).some(l => !l.isPrivate || isLoggedIn) && 
            (!categories[c].isHidden || isEditMode || isLoggedIn)
        );

        if (visibleCategories.length === 0) return;

        visibleCategories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-button whitespace-nowrap px-4 py-1.5 text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-600 transition-all active:scale-95 shadow-sm scroll-snap-align-start';
            btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300', 'hover:bg-emerald-50', 'hover:text-emerald-600', 'dark:hover:bg-slate-700', 'hover:border-emerald-300', 'dark:hover:border-emerald-500/50');
            
            btn.textContent = cat;
            btn.dataset.target = cat;
            btn.onclick = () => {
                scrollToCategory(cat);
            };
            container.appendChild(btn);
        });
    }

    function scrollToCategory(catId) {
        const section = document.getElementById(catId);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function setupScrollSpy() {
        if (scrollObserver) {
            scrollObserver.disconnect();
        }

        const sections = document.querySelectorAll('.section');
        const buttons = document.querySelectorAll('.category-button');

        if (!sections.length || !buttons.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '-80px 0px -80% 0px',
            threshold: 0
        };

        let lastHighlightedId = null;

        scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.id !== lastHighlightedId) {
                    lastHighlightedId = entry.target.id;
                    if (animationFrameId) cancelAnimationFrame(animationFrameId);
                    animationFrameId = requestAnimationFrame(() => highlightButton(entry.target.id));
                }
            });
        }, observerOptions);

        sections.forEach(section => scrollObserver.observe(section));
    }

    function highlightButton(id) {
        const buttons = document.querySelectorAll('.category-button');
        const activeClass = 'bg-emerald-500 text-white shadow-md dark:bg-emerald-600';
        const inactiveClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-slate-700';

        buttons.forEach(btn => {
            if (btn.dataset.target === id) {
                if (!btn.classList.contains('bg-emerald-500')) {
                    btn.classList.remove(...inactiveClass.split(' '));
                    btn.classList.add(...activeClass.split(' '));
                    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            } else {
                if (btn.classList.contains('bg-emerald-500')) {
                    btn.classList.remove(...activeClass.split(' '));
                    btn.classList.add(...inactiveClass.split(' '));
                }
            }
        });
    }

    // --- 遮罩层过渡辅助函数 ---
    function toggleOverlay(id, show) {
        const overlay = document.getElementById(id);
        const box = overlay.querySelector('div[id$="-box"]'); 
        
        if (show) {
            overlay.classList.remove('hidden');
            void overlay.offsetWidth; 
            overlay.classList.remove('overlay-hidden');
            overlay.classList.add('overlay-visible');
            
            if(box) {
                box.classList.remove('dialog-scale-hidden');
                box.classList.add('dialog-scale-visible');
            }
        } else {
            overlay.classList.remove('overlay-visible');
            overlay.classList.add('overlay-hidden');
            
            if(box) {
                box.classList.remove('dialog-scale-visible');
                box.classList.add('dialog-scale-hidden');
            }
            
            setTimeout(() => {
                if(overlay.classList.contains('overlay-hidden')) {
                    overlay.classList.add('hidden');
                }
            }, 300); 
        }
    }

    function updateUIState() {
        const editModeBtn = document.getElementById('edit-mode-btn');
        const loginBtn = document.getElementById('login-Btn');
        const addCategoryContainer = document.getElementById('add-category-container');
        const dataToolsMenu = document.getElementById('data-tools-menu');
        
        loginBtn.innerHTML = isLoggedIn ? 
            '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> 退出登录' : 
            '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> 登录';
        
        if(isLoggedIn) {
            loginBtn.classList.replace('text-red-500', 'text-slate-700');
            if(dataToolsMenu) dataToolsMenu.classList.remove('hidden');
        } else {
            if(dataToolsMenu) dataToolsMenu.classList.add('hidden');
        }
        
        if (isEditMode) {
            editModeBtn.innerHTML = '<span class="text-red-500 flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>退出编辑</span>';
            document.body.classList.add('edit-mode');
            if(addCategoryContainer) addCategoryContainer.classList.remove('hidden');
        } else {
            editModeBtn.innerHTML = isLoggedIn ? 
                '<span class="flex items-center gap-3"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>进入编辑模式</span>' : 
                '<span class="flex items-center gap-3 text-slate-400"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>编辑模式 (需登录)</span>';
            document.body.classList.remove('edit-mode');
            if(addCategoryContainer) addCategoryContainer.classList.add('hidden');
        }
    }
    
    function loadSections() {
        if (DOM.clearSearchButton) DOM.clearSearchButton.classList.add('hidden');
        if (DOM.searchInput) DOM.searchInput.value = '';
        renderCategorySections({ renderButtons: true });
    }

    const imgApi = '/api/icon?url=';

    function createCard(link, container) {
        if (!isEditMode && link.isPrivate && !isLoggedIn) return;

        const card = document.createElement('div');
        
        let cardBaseClass = isAppLayout 
            ? 'flex flex-col items-center justify-start py-1 gap-1.5 hover:z-10' 
            : 'flex flex-col p-4 bg-white/90 dark:bg-[#1e293b]/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border border-gray-200 dark:border-slate-700/50 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 shadow-sm hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] dark:shadow-none dark:hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)] hover:-translate-y-1.5';
            
        if (link.isPrivate && !isAppLayout) {
            cardBaseClass += ' ring-1 ring-amber-400/40 bg-amber-50/80 dark:bg-amber-900/10 !border-amber-200 dark:!border-amber-700/50';
        }

        card.className = \`group relative h-full w-full rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer select-none \${cardBaseClass}\`;
        
        if (isEditMode) {
            card.setAttribute('draggable', 'true');
            card.classList.add('card'); 
            card.classList.add('cursor-move');
        }
        
        card.dataset.isPrivate = link.isPrivate;
        card.setAttribute('data-url', link.url);

        const header = document.createElement('div');
        header.className = isAppLayout 
            ? 'flex flex-col items-center justify-center w-full relative' 
            : 'flex items-center gap-3 mb-2.5 w-full';
        
        const icon = document.createElement('img');
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('decoding', 'async');

        const iconSrc = (!link.icon || !link.icon.startsWith('http')) ? imgApi + link.url : link.icon;
        const cacheKey = iconSrc;
        const fallbackSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='12' y1='8' x2='12' y2='12'/%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'/%3E%3C/svg%3E";

        if (iconCache.has(cacheKey)) {
            icon.src = iconCache.get(cacheKey);
        } else {
            icon.src = iconSrc;
            icon.onload = function() {
                if (!iconCache.has(cacheKey)) {
                    iconCache.set(cacheKey, icon.src);
                }
            };
        }

        icon.onerror = function() {
            if (this.src !== fallbackSrc) {
                this.src = fallbackSrc;
                if (!iconCache.has(cacheKey + '_fallback')) {
                    iconCache.set(cacheKey + '_fallback', fallbackSrc);
                }
            }
        };

        let iconClass = '';
        if (isAppLayout) {
             iconClass = 'w-14 h-14 sm:w-16 sm:h-16 rounded-[1.2rem] object-contain bg-white dark:bg-slate-600 p-2 shadow-md hover:shadow-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-95 z-10';
             if (link.isPrivate) {
                 iconClass += ' ring-2 ring-amber-400';
             }
        } else {
             iconClass = 'w-9 h-9 rounded-lg object-contain bg-slate-100 dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-700 transition-transform group-hover:scale-105 pointer-events-none';
        }
        icon.className = iconClass;
        
        const title = document.createElement('div');
        const titleAlign = isAppLayout 
            ? 'text-center text-xs sm:text-sm font-medium mt-1 w-[120%] truncate px-1 text-slate-700 dark:text-slate-200 drop-shadow-sm' 
            : 'font-semibold text-sm flex-1 truncate text-slate-700 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors pointer-events-none';
        
        title.className = \`card-title pointer-events-none \${titleAlign}\`;
        title.textContent = link.name;
        
        header.appendChild(icon);
        header.appendChild(title);
        card.appendChild(header);

        if (!isAppLayout) {
            const desc = document.createElement('div');
            desc.className = 'text-xs text-slate-500 dark:text-slate-400 line-clamp-2 min-h-[1.25rem] card-tip leading-relaxed pointer-events-none w-full';
            desc.textContent = link.tips || '';
            card.appendChild(desc);
        }

        if (link.isPrivate && !isAppLayout) {
            const badge = document.createElement('div');
            badge.className = 'absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-2xl';
            badge.innerHTML = '<div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-8 h-8 bg-amber-400"></div>';
            card.appendChild(badge);
        }

        if (isEditMode) {
            const actionWrapper = document.createElement('div');
            actionWrapper.className = isAppLayout 
                ? 'absolute top-[-4px] right-[-4px] z-30' 
                : 'absolute top-2 right-2 z-30';

            const menuBtn = document.createElement('button');
            const btnStyle = isAppLayout
                ? 'w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shadow-sm hover:bg-emerald-500 hover:text-white'
                : 'w-7 h-7 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100/80 backdrop-blur-sm';
            
            menuBtn.className = \`\${btnStyle} flex items-center justify-center transition-all duration-200\`;
            menuBtn.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>';
            
            const dropdown = document.createElement('div');
            dropdown.className = 'hidden absolute right-0 top-6 w-28 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform origin-top-right transition-all z-50 flex flex-col p-1 card-menu-dropdown';
            
            dropdown.innerHTML = \`
                <button class="menu-edit w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700/50 hover:text-emerald-600 transition-colors flex items-center gap-2">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    编辑
                </button>
                <button class="menu-delete w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors flex items-center gap-2">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    删除
                </button>
            \`;

            menuBtn.onclick = (e) => {
                e.stopPropagation();
                document.querySelectorAll('.card-menu-dropdown').forEach(el => {
                    if (el !== dropdown) el.classList.add('hidden');
                });
                dropdown.classList.toggle('hidden');
            };

            dropdown.querySelector('.menu-edit').onclick = (e) => {
                e.stopPropagation();
                dropdown.classList.add('hidden');
                showEditDialog(link);
            };

            dropdown.querySelector('.menu-delete').onclick = (e) => {
                e.stopPropagation();
                dropdown.classList.add('hidden');
                removeCard(card);
            };

            actionWrapper.appendChild(menuBtn);
            actionWrapper.appendChild(dropdown);
            card.appendChild(actionWrapper);
        }

        if (isEditMode) {
            card.addEventListener('dragstart', dragStart, { passive: true });
            card.addEventListener('dragover', dragOver, { passive: false });
            card.addEventListener('dragend', dragEnd);
            card.addEventListener('drop', drop);
        }

        if (!isEditMode && link.tips) {
            card.classList.add('has-tooltip');
            card.setAttribute('data-tooltip', link.tips);
        }

        container.appendChild(card);
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.card-menu-dropdown') && !e.target.closest('button')) {
            document.querySelectorAll('.card-menu-dropdown').forEach(el => el.classList.add('hidden'));
        }
    });
    
    function updateCategorySelect() {
        const menu = document.getElementById('category-select-menu');
        menu.innerHTML = '';
        Object.keys(categories).forEach(cat => {
            const item = document.createElement('div');
            item.className = 'px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 cursor-pointer transition-colors';
            item.textContent = cat;
            item.onclick = () => {
                document.getElementById('category-select-value').value = cat;
                document.getElementById('category-select-text').textContent = cat;
                menu.classList.add('hidden');
            };
            menu.appendChild(item);
        });
    }

    async function addCard() {
        if (!await validateTokenOrRedirect()) return;
        const name = document.getElementById('name-input').value.trim();
        const url = document.getElementById('url-input').value.trim();
        const category = document.getElementById('category-select-value').value;
        
        if (!name || !url || !category) {
            await customAlert('请填写必要信息 (名称, URL, 分类)');
            return;
        }

        const newLink = {
            name, url, category,
            tips: document.getElementById('tips-input').value.trim(),
            icon: document.getElementById('icon-input').value.trim(),
            isPrivate: document.getElementById('private-checkbox').checked
        };

        try {
            categories[category].links.push(newLink);
            await saveLinks();
            if (isEditMode || !newLink.isPrivate || isLoggedIn) {
                 renderCategories();
            }
            hideAddDialog();
        } catch (e) {
            await customAlert('添加失败: ' + e);
        }
    }

    async function updateCard(oldLink) {
        if (!await validateTokenOrRedirect()) return;
        
        const updatedLink = {
            name: document.getElementById('name-input').value.trim(),
            url: document.getElementById('url-input').value.trim(),
            tips: document.getElementById('tips-input').value.trim(),
            icon: document.getElementById('icon-input').value.trim(),
            category: document.getElementById('category-select-value').value,
            isPrivate: document.getElementById('private-checkbox').checked
        };

        let found = false;
        
        for (const cat in categories) {
             const idx = categories[cat].links.findIndex(l => l.url === oldLink.url);
             
             if (idx !== -1) {
                 found = true;
                 
                 if (cat === updatedLink.category) {
                     categories[cat].links[idx] = updatedLink;
                 } 
                 else {
                     categories[cat].links.splice(idx, 1);
                     
                     if(!categories[updatedLink.category]) {
                         categories[updatedLink.category] = { isHidden:false, links:[] };
                     }
                     categories[updatedLink.category].links.push(updatedLink);
                 }
                 break; 
             }
        }
        
        if (!found) {
             if(!categories[updatedLink.category]) {
                 categories[updatedLink.category] = { isHidden:false, links:[] };
             }
             categories[updatedLink.category].links.push(updatedLink);
        }

        await saveLinks();
        renderCategories();
        hideAddDialog();
    }

    async function removeCard(card) {
        if (!await validateTokenOrRedirect()) return;
        const url = card.getAttribute('data-url');
        for (const cat in categories) {
            const idx = categories[cat].links.findIndex(l => l.url === url);
            if (idx !== -1) {
                categories[cat].links.splice(idx, 1);
                break;
            }
        }
        card.remove();
        await saveLinks();
    }

    // --- 拖拽辅助函数 ---
    function getCardState(card) {
        if(!card) return { category: null, index: -1 };
        const section = card.closest('.section');
        const index = Array.from(section.querySelectorAll('.card')).indexOf(card);
        return { category: section.id, index: index };
    }

    // --- 拖拽（电脑端） ---
    let draggedCard = null;
    function dragStart(e) {
        if (!isEditMode) { e.preventDefault(); return; }
        draggedCard = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = "move";
        initialDragState = getCardState(this);
    }
    function dragOver(e) {
        if (!isEditMode) return;
        e.preventDefault();
        const target = e.target.closest('.card');
        if (target && target !== draggedCard) {
            const container = target.parentElement;
            const rect = target.getBoundingClientRect();
            if (e.clientX < rect.left + rect.width / 2) {
                container.insertBefore(draggedCard, target);
            } else {
                container.insertBefore(draggedCard, target.nextSibling);
            }
        }
    }
    function dragEnd() {
        this.classList.remove('dragging');
    }
    async function drop(e) {
        if (!isEditMode) return;
        e.preventDefault();
        if (draggedCard) {
            const newState = getCardState(draggedCard);
            if (newState.category !== initialDragState.category || newState.index !== initialDragState.index) {
                updateCardCategory(draggedCard, newState.category);
                await saveCardOrder();
            }
            draggedCard = null;
        }
    }

    // 移动端拖拽
    let mobileDragTimer = null;
    let isMobileDragging = false;
    let mobilePlaceholder = null; 
    let mobileClone = null;       
    let mobileTouchOffset = { x: 0, y: 0 }; 
    let rafId = null;             
    let lastTouchX = 0;
    let lastTouchY = 0;
    let lastSwapTime = 0;         
    let activeContainer = null;
    let cloneWidth = 0;
    let cloneHeight = 0;

    function touchStart(e) {
        if (!isEditMode) return;
        if (e.touches.length > 1) return; 

        const card = e.target.closest('.card');
        if (!card) return;

        const touch = e.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;

        if (mobileDragTimer) clearTimeout(mobileDragTimer);

        mobileDragTimer = setTimeout(() => {
            isMobileDragging = true;
            mobilePlaceholder = card;
            activeContainer = mobilePlaceholder.parentElement;
            
            initialDragState = getCardState(mobilePlaceholder);

            const rect = mobilePlaceholder.getBoundingClientRect();
            cloneWidth = rect.width;
            cloneHeight = rect.height;

            mobileTouchOffset.x = startX - rect.left;
            mobileTouchOffset.y = startY - rect.top;
            
            lastTouchX = startX;
            lastTouchY = startY;

            mobileClone = mobilePlaceholder.cloneNode(true);
            
            Object.assign(mobileClone.style, {
                position: 'fixed',
                left: rect.left + 'px',
                top: rect.top + 'px',
                width: rect.width + 'px',
                height: rect.height + 'px',
                zIndex: '9999',
                opacity: '0.95',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', 
                transform: 'scale(1.05)', 
                transition: 'none'
            });
            mobileClone.classList.add('card-clone-dragging');
            mobileClone.classList.remove('group', 'hover:-translate-y-1', 'transition-all', 'duration-300');
            document.body.appendChild(mobileClone);

            // 占位符样式
            mobilePlaceholder.style.opacity = '0.3';
            mobilePlaceholder.classList.add('border-dashed', 'border-2', 'border-emerald-400');

            if (navigator.vibrate) navigator.vibrate(50);
            
            updatePosition();
        }, 500);

        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('touchcancel', handleTouchEnd);

        function updatePosition() {
            if (!isMobileDragging || !mobileClone) return;
            
            const x = lastTouchX - mobileTouchOffset.x;
            const y = lastTouchY - mobileTouchOffset.y;
            
            mobileClone.style.left = x + 'px';
            mobileClone.style.top = y + 'px';
            
            rafId = requestAnimationFrame(updatePosition);
        }

        function handleTouchMove(moveEvent) {
            const moveTouch = moveEvent.touches[0];

            if (!isMobileDragging) {
                const diffX = moveTouch.clientX - startX;
                const diffY = moveTouch.clientY - startY;
                const distance = Math.sqrt(diffX * diffX + diffY * diffY);

                if (distance > 10) {
                    clearTimeout(mobileDragTimer);
                    mobileDragTimer = null;
                }

                return;
            }

            if (isMobileDragging) {
                // 不使用 preventDefault 以允许页面滚动，除非确实在拖动卡片
                if (Math.abs(diffX) > Math.abs(diffY)) {
                     moveEvent.preventDefault();
                }

                lastTouchX = moveTouch.clientX;
                lastTouchY = moveTouch.clientY;

                const now = Date.now();
                if (now - lastSwapTime > 50) {
                    detectSort(moveTouch.clientX, moveTouch.clientY);
                }
            }
        }

        function detectSort(fingerX, fingerY) {
            let elementBelow = document.elementFromPoint(fingerX, fingerY);
            if (!elementBelow) return;

            let targetCard = elementBelow.closest('.card') || elementBelow.closest('.add-card-placeholder');
            let targetContainer = targetCard ? targetCard.parentElement : elementBelow.closest('.card-container');
            
            if (!targetContainer) return;

            if (activeContainer !== targetContainer) {
                activeContainer = targetContainer;
                const placeholderBtn = activeContainer.querySelector('.add-card-placeholder');
                if (placeholderBtn) {
                    activeContainer.insertBefore(mobilePlaceholder, placeholderBtn);
                } else {
                    activeContainer.appendChild(mobilePlaceholder);
                }
                lastSwapTime = Date.now();
                return;
            }

            const containerRect = activeContainer.getBoundingClientRect();
            
            const cloneViewportCenterX = lastTouchX - mobileTouchOffset.x + (cloneWidth / 2);
            const cloneViewportCenterY = lastTouchY - mobileTouchOffset.y + (cloneHeight / 2);

            const cloneRelX = cloneViewportCenterX - containerRect.left + activeContainer.scrollLeft;
            const cloneRelY = cloneViewportCenterY - containerRect.top + activeContainer.scrollTop;

            const siblings = Array.from(activeContainer.children).filter(c => 
                (c.classList.contains('card') || c.classList.contains('add-card-placeholder')) && c !== mobilePlaceholder
            );

            if (siblings.length === 0) return;

            let closestElement = null;
            let minDistance = Infinity;

            for (const child of siblings) {
                const childCenterX = child.offsetLeft + child.offsetWidth / 2;
                const childCenterY = child.offsetTop + child.offsetHeight / 2;
                
                const dist = Math.hypot(cloneRelX - childCenterX, cloneRelY - childCenterY);
                
                if (dist < minDistance) {
                    minDistance = dist;
                    closestElement = child;
                }
            }

            if (closestElement) {
                const positionsBefore = new Map();
                const allChildren = Array.from(activeContainer.children).filter(el => 
                    el.classList.contains('card') || el.classList.contains('add-card-placeholder')
                );
                allChildren.forEach(el => positionsBefore.set(el, el.getBoundingClientRect()));

                const placeholderIndex = allChildren.indexOf(mobilePlaceholder);
                const targetIndex = allChildren.indexOf(closestElement);

                if (targetIndex > placeholderIndex) {
                    activeContainer.insertBefore(mobilePlaceholder, closestElement.nextSibling);
                } else {
                    activeContainer.insertBefore(mobilePlaceholder, closestElement);
                }
                
                animateFlip(activeContainer, positionsBefore);
                
                lastSwapTime = Date.now();
                if(navigator.vibrate) navigator.vibrate(10);
            }
        }

        function animateFlip(container, positionsBefore) {
            const siblings = Array.from(container.children);
            siblings.forEach(el => {
                if (el === mobilePlaceholder) return;
                
                const rectAfter = el.getBoundingClientRect();
                const rectBefore = positionsBefore.get(el);

                if (rectBefore && (rectBefore.left !== rectAfter.left || rectBefore.top !== rectAfter.top)) {
                    const dx = rectBefore.left - rectAfter.left;
                    const dy = rectBefore.top - rectAfter.top;

                    el.style.transition = 'none';
                    el.style.transform = \`translate(\${dx}px, \${dy}px)\`;
                    el.offsetHeight; 
                    el.style.transition = 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)';
                    el.style.transform = '';

                    setTimeout(() => {
                        if (el.style.transform === '') {
                            el.style.transition = '';
                        }
                    }, 200);
                }
            });
        }

        function handleTouchEnd() {
            if (mobileDragTimer) {
                clearTimeout(mobileDragTimer);
                mobileDragTimer = null;
            }
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }

            if (isMobileDragging) {
                if (mobileClone && mobilePlaceholder) {
                    const rect = mobilePlaceholder.getBoundingClientRect();
                    mobileClone.style.transition = 'all 0.2s ease-out';
                    mobileClone.style.left = rect.left + 'px';
                    mobileClone.style.top = rect.top + 'px';
                    mobileClone.style.opacity = '0';

                    setTimeout(() => {
                        if (mobileClone) {
                            mobileClone.remove();
                            mobileClone = null;
                        }
                        if (mobilePlaceholder) {
                             mobilePlaceholder.style.opacity = '';
                             mobilePlaceholder.classList.remove('border-dashed', 'border-2', 'border-emerald-400');
                             mobilePlaceholder = null;
                        }

                        saveCardOrder();
                    }, 200);
                } else {
                    if (mobileClone) {
                        mobileClone.remove();
                        mobileClone = null;
                    }
                    if (mobilePlaceholder) {
                        mobilePlaceholder.style.opacity = '';
                        mobilePlaceholder = null;
                    }
                }

                document.body.style.overflow = '';
            }

            isMobileDragging = false;
            cleanupListeners();
        }

        function cleanupListeners() {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('touchcancel', handleTouchEnd);
        }
    }

    function updateCardCategory(card, newCategory) {
        const url = card.getAttribute('data-url');
        let item = null;
        for (const cat in categories) {
             const idx = categories[cat].links.findIndex(l => l.url === url);
             if (idx !== -1) {
                 item = categories[cat].links.splice(idx, 1)[0];
                 break;
             }
        }
        if(item) {
            item.category = newCategory;
            categories[newCategory].links.push(item);
        }
    }

    async function saveCardOrder() {
        const newCategories = {};
        const sections = document.querySelectorAll('.section');
        sections.forEach(sec => {
            const catName = sec.id;
            const oldCat = categories[catName];
            newCategories[catName] = { isHidden: oldCat ? oldCat.isHidden : false, links: [] };
            
            const cards = sec.querySelectorAll('.card');
            cards.forEach(c => {
                 const url = c.getAttribute('data-url');
                 const original = Object.values(categories).flatMap(x=>x.links).find(l=>l.url === url);
                 if(original) {
                     original.category = catName;
                     newCategories[catName].links.push(original);
                 }
            });
        });
        
        Object.keys(categories).forEach(k => delete categories[k]);
        Object.assign(categories, newCategories);
        await saveDataToServer('保存排序', categories);
    }

    function applyTheme(isDark) {
        if (isDark) {
             document.documentElement.classList.add('dark');
        } else {
             document.documentElement.classList.remove('dark');
        }
        updateThemeSwitchUI();
    }
    
    function updateThemeSwitchUI() {
        const isDark = document.documentElement.classList.contains('dark');
        const checkbox = document.getElementById('theme-switch-checkbox');
        if(checkbox) checkbox.checked = isDark;
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function cleanupResources() {
        if (scrollObserver) {
            scrollObserver.disconnect();
            scrollObserver = null;
        }
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        if (mobileDragTimer) {
            clearTimeout(mobileDragTimer);
            mobileDragTimer = null;
        }
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 认证和模式
    async function toggleEditMode() {
        document.getElementById('profile-dropdown').classList.add('hidden');
        if (!isLoggedIn) {
            toggleLogin();
            return;
        }

        if (!isEditMode) {
             isEditMode = true;
             updateUIState();
             
             renderCategories(); 
             
             // 提示用户
             // logAction('进入编辑模式', {}); 
        } else {
             // 退出编辑模式
             isEditMode = false;
             updateUIState();
             renderCategories();
        }
    }
    
    async function toggleLogin() {
        if (!isLoggedIn) {
             toggleOverlay('password-dialog-overlay', true);
             document.getElementById('password-input').focus();
        } else {
             if (await customConfirm('确定退出登录吗？')) {
                 logout();
             }
        }
    }
    
    function showAddDialog() {
        toggleOverlay('dialog-overlay', true);
        document.getElementById('name-input').value = '';
        document.getElementById('url-input').value = '';
        document.getElementById('tips-input').value = '';
        document.getElementById('icon-input').value = '';
        document.getElementById('private-checkbox').checked = false;
        
        document.getElementById('category-select-value').value = '';
        document.getElementById('category-select-text').textContent = '请选择分类';
        
        const btn = document.getElementById('dialog-confirm-btn');
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.onclick = addCard;
        
        document.getElementById('dialog-cancel-btn').onclick = hideAddDialog;
    }
    
    function showEditDialog(link) {
        toggleOverlay('dialog-overlay', true);
        document.getElementById('name-input').value = link.name;
        document.getElementById('url-input').value = link.url;
        document.getElementById('tips-input').value = link.tips || '';
        document.getElementById('icon-input').value = link.icon || '';
        document.getElementById('private-checkbox').checked = link.isPrivate;
        
        document.getElementById('category-select-value').value = link.category;
        document.getElementById('category-select-text').textContent = link.category;
        
        const btn = document.getElementById('dialog-confirm-btn');
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.onclick = () => updateCard(link);
        
        document.getElementById('dialog-cancel-btn').onclick = hideAddDialog;
    }
    
    function hideAddDialog() {
        toggleOverlay('dialog-overlay', false);
    }

    document.getElementById('password-confirm-btn').onclick = async () => {
         const pwd = document.getElementById('password-input').value;
         if(!pwd) return;
         try {
             const res = await fetch('/api/login', {
                 method: 'POST',
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({password: pwd})
             });
             const data = await res.json();
             if(data.valid) {
                 localStorage.setItem('authToken', data.token);
                 isLoggedIn = true;
                 toggleOverlay('password-dialog-overlay', false);
                 await loadLinks();
                 await customAlert('登录成功');
             } else {
                 await customAlert('密码错误');
             }
         } catch(e) { await customAlert('Login Error'); }
    }

    async function fetchWithAuth(url, options = {}) {
        const token = localStorage.getItem('authToken');
        const headers = options.headers || {};
        headers.Authorization = token;
        options.headers = headers;

        let res = await fetch(url, options);

        if (res.status === 401) {
            try {
                const refreshRes = await fetch('/api/refreshToken', {
                    method: 'POST',
                    credentials: 'include' 
                });

                if (refreshRes.ok) {
                    const refreshData = await refreshRes.json();
                    localStorage.setItem('authToken', refreshData.accessToken);
                    headers.Authorization = refreshData.accessToken;
                    options.headers = headers;
                    res = await fetch(url, options);
                } else {
                    throw new Error('Refresh token expired');
                }
            } catch (refreshError) {
                localStorage.removeItem('authToken');
                isLoggedIn = false;
                toggleOverlay('password-dialog-overlay', true);
                await customAlert('登录已过期，请重新登录');
                throw new Error('Unauthorized');
            }
        }

        return res;
    };
    
    document.getElementById('password-cancel-btn').onclick = () => {
         toggleOverlay('password-dialog-overlay', false);
    };

    function showCategoryDialog(title, defaultVal = '') {
        return new Promise(resolve => {
            toggleOverlay('category-dialog', true);
            document.getElementById('category-dialog-title').innerText = title;
            const input = document.getElementById('category-name-input');
            input.value = defaultVal;
            input.focus();
            
            const close = (val) => {
                toggleOverlay('category-dialog', false);
                document.getElementById('category-confirm-btn').onclick = null;
                document.getElementById('category-cancel-btn').onclick = null;
                resolve(val);
            };
            
            document.getElementById('category-confirm-btn').onclick = () => close(input.value.trim());
            document.getElementById('category-cancel-btn').onclick = () => close(null);
        });
    }

    function customConfirm(msg) {
        return new Promise(resolve => {
            toggleOverlay('custom-confirm-overlay', true);
            document.getElementById('custom-confirm-message').innerText = msg;
            
            const close = (val) => {
                toggleOverlay('custom-confirm-overlay', false);
                document.getElementById('custom-confirm-ok').onclick = null;
                document.getElementById('custom-confirm-cancel').onclick = null;
                resolve(val);
            };
            document.getElementById('custom-confirm-ok').onclick = () => close(true);
            document.getElementById('custom-confirm-cancel').onclick = () => close(false);
        });
    }

    function customAlert(msg) {
        return new Promise(resolve => {
             toggleOverlay('custom-alert-overlay', true);
             document.getElementById('custom-alert-content').innerText = msg;
             document.getElementById('custom-alert-confirm').onclick = () => {
                 toggleOverlay('custom-alert-overlay', false);
                 resolve();
             }
        });
    }

    function setupTooltipDelegation() {
        const tooltip = document.getElementById('custom-tooltip');
        let activeTarget = null;
        let tooltipVisible = false;
        let lastUpdateTime = 0;

        const updateTooltip = (e) => {
            const now = Date.now();
            if (now - lastUpdateTime < 16) return;
            lastUpdateTime = now;

            const target = e.target.closest('.has-tooltip');

            if (target) {
                const text = target.getAttribute('data-tooltip');
                if (text) {
                    if (activeTarget !== target) {
                        activeTarget = target;
                        tooltip.textContent = text;
                        tooltip.classList.remove('hidden');
                        tooltipVisible = true;
                    }
                    const offset = 12;
                    let left = e.clientX + offset;
                    let top = e.clientY + offset;

                    const tooltipRect = tooltip.getBoundingClientRect();

                    if (left + tooltipRect.width > window.innerWidth) {
                        left = e.clientX - tooltipRect.width - offset;
                    }
                    if (top + tooltipRect.height > window.innerHeight) {
                        top = e.clientY - tooltipRect.height - offset;
                    }

                    tooltip.style.left = left + 'px';
                    tooltip.style.top = top + 'px';
                } else {
                    hideTooltipInternal();
                }
            } else {
                hideTooltipInternal();
            }
        };

        const hideTooltipInternal = () => {
            if (tooltipVisible) {
                tooltip.classList.add('hidden');
                activeTarget = null;
                tooltipVisible = false;
            }
        };

        document.body.addEventListener('mousemove', updateTooltip, { passive: true });
        window.addEventListener('scroll', hideTooltipInternal, { passive: true });
    }

    function showTooltip(e, text) {
        const tooltip = document.getElementById('custom-tooltip');
        tooltip.textContent = text;
        tooltip.classList.remove('hidden');

        const offset = 12; 
        let left = e.clientX + offset;
        let top = e.clientY + offset;
        
        const tooltipRect = tooltip.getBoundingClientRect();
        
        if (left + tooltipRect.width > window.innerWidth) {
            left = e.clientX - tooltipRect.width - offset;
        }
        if (top + tooltipRect.height > window.innerHeight) {
            top = e.clientY - tooltipRect.height - offset;
        }
        
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    function hideTooltip() {
        const tooltip = document.getElementById('custom-tooltip');
        if (tooltip && !tooltip.classList.contains('hidden')) {
            tooltip.classList.add('hidden');
        }
    }
    

    async function backupUserData() {
        try {
            const res = await fetchWithAuth('/api/backupData', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({}),
            });
            if(res.status === 401) {
                logout();
                await customAlert('登录凭证已过期，请重新登录');
                return false;
            }
            const d = await res.json();
            return d.success;
        } catch(e) { return false; }
    }
    
    async function reloadCardsAsAdmin() {
         await loadLinks();
    }
    
    async function validateTokenOrRedirect() {
        const valid = await validateToken();
        if(!valid) {
            logout();
            await customAlert('登录凭证已过期，请重新登录');
            return false;
        }
        return true;
    }
    
    async function validateToken() {
        const t = localStorage.getItem('authToken');
        if(!t) return false;
        try {
            const r = await fetchWithAuth('/api/validateToken');
            return r.status === 200;
        } catch(e) { return false; }
    }
    
    function logout() {
        localStorage.removeItem('authToken');
        isLoggedIn = false;
        isEditMode = false;
        location.reload();
    }
    
    async function exportData() {
        if(!await validateTokenOrRedirect()) return;
        if(!await customConfirm("确定要导出数据吗？")) return;
        
        try {
            const res = await fetchWithAuth("/api/exportData", {
                method: "POST"
            });
            
            if (res.status === 401) {
                logout();
                await customAlert('登录凭证已过期，请重新登录');
                return;
            }
            
            if (!res.ok) throw new Error("Export failed");
            const data = await res.json();
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "nav_export_" + new Date().toISOString().split("T")[0] + ".json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch(e) { 
            if(e.message !== 'Unauthorized') await customAlert("导出失败"); 
        }
    }
    
    async function importData() {
        if(!await validateTokenOrRedirect()) return;
        if(!await customConfirm("确定要导入数据吗？导入将覆盖现有数据！")) return;
        
        const fileInput = document.getElementById('import-file-input');
        fileInput.value = '';
        
        fileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            try {
                const reader = new FileReader();
                reader.onload = async (event) => {
                    try {
                        const data = JSON.parse(event.target.result);
                        const res = await fetchWithAuth("/api/importData", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        });
                        
                        if (res.status === 401) {
                            logout();
                            await customAlert('登录凭证已过期，请重新登录');
                            return;
                        }
                        
                        if (!res.ok) throw new Error("Import failed");
                        
                        await customAlert('数据导入成功！');
                        location.reload(); 
                    } catch (error) {
                        console.error("解析文件失败:", error);
                        await customAlert('文件格式错误，请检查文件内容！');
                    }
                };
                reader.readAsText(file);
            } catch (error) {
                console.error("导入失败:", error);
                await customAlert('数据导入失败，请重试！');
            }
        };
        fileInput.click();
    }

    </script>
</body>
</html>
`;

// ============================================
// 配置常量
// ============================================
const DEFAULT_USER = 'testUser';
const DEFAULT_IMGAPI = 'https://api.xinac.net/icon/?url=';

// 默认配置 (可通过环境变量覆盖)
const DEFAULT_CONFIG = {
    MAX_BACKUPS: 10,
    MIN_BACKUP_INTERVAL_MS: 10 * 60 * 1000, // 10分钟
    ACCESS_TOKEN_EXPIRY: 7200,              // 2小时
    REFRESH_TOKEN_EXPIRY: 2592000,          // 30天
    ICON_CACHE_MAX_AGE: 604800,             // 7天
    HTML_CACHE_MAX_AGE: 3600,               // 1小时
};

// ============================================
// 辅助函数
// ============================================

/**
 * 获取配置值，优先使用环境变量
 */
function getConfig(env, key) {
    if (env[key] !== undefined) {
        const val = env[key];
        // 尝试解析数字
        const num = parseInt(val, 10);
        return isNaN(num) ? val : num;
    }
    return DEFAULT_CONFIG[key];
}

/**
 * 生成动态 CORS headers
 */
function getCorsHeaders(env, request) {
    const origin = request?.headers?.get('Origin') || '*';
    const allowedOrigin = env.ALLOWED_ORIGIN || '*';
    
    // 如果配置了特定域名，验证请求来源
    let responseOrigin = '*';
    if (allowedOrigin !== '*') {
        const allowedOrigins = allowedOrigin.split(',').map(o => o.trim());
        if (allowedOrigins.includes(origin)) {
            responseOrigin = origin;
        } else {
            responseOrigin = allowedOrigins[0]; // 默认使用第一个允许的域名
        }
    }
    
    return {
        'Access-Control-Allow-Origin': responseOrigin,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
        'Access-Control-Allow-Credentials': 'true'
    };
}

/**
 * 时序安全的字符串比较 (防止时序攻击)
 */
async function timingSafeEqual(a, b) {
    const encoder = new TextEncoder();
    const aBytes = encoder.encode(a);
    const bBytes = encoder.encode(b);
    
    if (aBytes.length !== bBytes.length) {
        // 为防止长度泄露，仍然进行完整比较
        const dummyBytes = encoder.encode(a);
        await crypto.subtle.digest('SHA-256', dummyBytes);
        return false;
    }
    
    // 使用 HMAC 进行恒定时间比较
    const key = await crypto.subtle.generateKey(
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );
    
    const sigA = await crypto.subtle.sign('HMAC', key, aBytes);
    const sigB = await crypto.subtle.sign('HMAC', key, bBytes);
    
    const arrA = new Uint8Array(sigA);
    const arrB = new Uint8Array(sigB);
    
    let result = 0;
    for (let i = 0; i < arrA.length; i++) {
        result |= arrA[i] ^ arrB[i];
    }
    return result === 0;
}

/**
 * 结构化日志记录
 */
function logError(context, error, extra = {}) {
    console.error(JSON.stringify({
        timestamp: new Date().toISOString(),
        context,
        error: error?.message || String(error),
        stack: error?.stack,
        ...extra
    }));
}

function logInfo(context, message, extra = {}) {
    console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        context,
        message,
        ...extra
    }));
}

function base64UrlEncode(str) {
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlEncodeUint8(arr) {
    const str = String.fromCharCode(...arr);
    return base64UrlEncode(str);
}

function base64UrlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    return atob(str);
}

async function createJWT(payload, secret) {
    const encoder = new TextEncoder();
    const header = { alg: 'HS256', typ: 'JWT' };
    const headerEncoded = base64UrlEncode(JSON.stringify(header));
    const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
    const toSign = encoder.encode(`${headerEncoded}.${payloadEncoded}`);

    const key = await crypto.subtle.importKey(
        'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', key, toSign);
    const signatureEncoded = base64UrlEncodeUint8(new Uint8Array(signature));

    return `${headerEncoded}.${payloadEncoded}.${signatureEncoded}`;
}

async function validateJWT(token, secret) {
    try {
        const encoder = new TextEncoder();
        const parts = token.split('.');
        if (parts.length !== 3) return null;

        const [headerEncoded, payloadEncoded, signature] = parts;
        const data = encoder.encode(`${headerEncoded}.${payloadEncoded}`);

        const key = await crypto.subtle.importKey(
            'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
        );

        const expectedSigBuffer = await crypto.subtle.sign('HMAC', key, data);
        const expectedSig = base64UrlEncodeUint8(new Uint8Array(expectedSigBuffer));

        if (signature !== expectedSig) return null;

        const payloadStr = base64UrlDecode(payloadEncoded);
        return JSON.parse(payloadStr);
    } catch (e) {
        return null;
    }
}

function parseCookie(cookieHeader) {
    const cookies = {};
    if (!cookieHeader) return cookies;
    cookieHeader.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        cookies[name] = decodeURIComponent(value);
    });
    return cookies;
}

async function validateServerToken(authHeader, env) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { isValid: false, status: 401, response: { error: 'Unauthorized', message: '未登录' } };
    }
    const token = authHeader.slice(7);
    
    const payload = await validateJWT(token, env.JWT_SECRET);
    
    if (!payload) {
        return { isValid: false, status: 401, response: { error: 'Invalid', message: 'Token无效' } };
    }
    
    if (payload.exp < Math.floor(Date.now() / 1000)) {
        return { isValid: false, status: 401, response: { error: 'Expired', message: 'Token过期' } };
    }

    if (payload.type !== 'access') {
        return { isValid: false, status: 403, response: { error: 'Forbidden', message: '令牌类型错误' } };
    }

    return { isValid: true, payload };
}

function normalizeCategories(categories) {
    for (const key in categories) {
        if (Array.isArray(categories[key])) {
            categories[key] = { isHidden: false, links: categories[key] };
        }
    }
    return categories;
}

// corsHeaders 已移至 getCorsHeaders 函数动态生成

async function fetchBestIcon(targetUrl) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    };

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); 
        
        const response = await fetch(targetUrl, {
            headers: headers,
            redirect: 'follow',
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error('Site unreachable');

        let iconUrl = null;
        
        const rewriter = new HTMLRewriter()
            .on('link[rel="apple-touch-icon"]', { 
                element(e) {
                    if (!iconUrl) {
                        const href = e.getAttribute('href');
                        if (href) iconUrl = href;
                    }
                }
            })
            .on('link[rel~="icon"]', {
                element(e) {
                    if (!iconUrl) {
                        const href = e.getAttribute('href');
                        if (href) iconUrl = href;
                    }
                }
            });

        await rewriter.transform(response).text();

        let finalUrl;
        if (iconUrl) {
            finalUrl = new URL(iconUrl, targetUrl).toString();
        } else {
            finalUrl = new URL('/favicon.ico', targetUrl).toString();
        }

        const iconResponse = await fetch(finalUrl, { 
            headers: headers 
        });

        if (iconResponse.ok && iconResponse.headers.get('content-type')?.includes('image')) {
            return iconResponse;
        }
        
        throw new Error('Icon fetch failed');

    } catch (e) {
    }
    return null;
}

async function handleIconProxy(request, ctx, env) {
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');
    const corsHeaders = getCorsHeaders(env, request);

    if (!targetUrl) return new Response('Missing URL', { status: 400, headers: corsHeaders });

    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;
    
    let response = await cache.match(cacheKey);

    if (response) {
        response = new Response(response.body, response);
        response.headers.set('X-Icon-Cache-Status', 'HIT');
    } else {
        let upstreamResponse = null;
        const useExternalApi = env.USE_EXTERNAL_ICON_API === 'true';
        
        if (useExternalApi) {
            try {
                const upstreamApi = `${DEFAULT_IMGAPI}${encodeURIComponent(targetUrl)}`;
                upstreamResponse = await fetch(upstreamApi, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
                });
            } catch (e) {
                logError('handleIconProxy', e, { targetUrl, method: 'external_api' });
            }
        }
        
        // 如果外部 API 失败或未启用，使用自建抓取
        if (!upstreamResponse || !upstreamResponse.ok) {
            upstreamResponse = await fetchBestIcon(targetUrl);
        }
        
        const iconCacheMaxAge = getConfig(env, 'ICON_CACHE_MAX_AGE');
        
        if (upstreamResponse && upstreamResponse.ok) {
            response = new Response(upstreamResponse.body, upstreamResponse);
            response.headers.set('Cache-Control', `public, max-age=${iconCacheMaxAge}, s-maxage=${iconCacheMaxAge}`);
            response.headers.set('Access-Control-Allow-Origin', corsHeaders['Access-Control-Allow-Origin']);
            response.headers.set('X-Icon-Cache-Status', 'MISS');
            ctx.waitUntil(cache.put(cacheKey, response.clone()));
        } else {
            const defaultSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64">
                <path fill="#000000" d="M62 32C62 15.432 48.568 2 32 2C15.861 2 2.703 14.746 2.031 30.72c-.008.196-.01.395-.014.592c-.005.23-.017.458-.017.688v.101C2 48.614 15.432 62 32 62s30-13.386 30-29.899l-.002-.049zM37.99 59.351c-.525-.285-1.029-.752-1.234-1.388c-.371-1.152-.084-2.046.342-3.086c.34-.833-.117-1.795.109-2.667c.441-1.697.973-3.536.809-5.359c-.102-1.119-.35-1.17-1.178-1.816c-.873-.685-.873-1.654-1.457-2.52c-.529-.787.895-3.777.498-3.959c-.445-.205-1.457.063-1.777-.362c-.344-.458-.584-.999-1.057-1.354c-.305-.229-1.654-.995-2.014-.941c-1.813.271-3.777-1.497-4.934-2.65c-.797-.791-1.129-1.678-1.713-2.593c-.494-.775-1.242-.842-1.609-1.803c-.385-1.004-.156-2.29-.273-3.346c-.127-1.135-.691-1.497-1.396-2.365c-1.508-1.863-2.063-4.643-4.924-4.643c-1.537 0-1.428 3.348-2.666 2.899c-1.4-.507-3.566 1.891-3.535 1.568c.164-1.674 1.883-2.488 2.051-2.987c.549-1.638-2.453-1.246-2.068-2.612c.188-.672 2.098-1.161 1.703-1.562c-.119-.122-1.58-1.147-1.508-1.198c.271-.19 1.449.412 1.193-.37c-.086-.26-.225-.499-.357-.74a28 28 0 0 1 1.92-1.975c1.014-.083 2.066-.02 2.447.054c2.416.476 3.256 1.699 5.672.794c1.162-.434 5.445.319 6.059 1.537c.334.666 1.578-.403 2.063-.475c.52-.078 1.695.723 2.053.232c.943-1.291-.604-1.827 1.223-.833c1.225.667 3.619-2.266 2.861 1.181c-.547 2.485-2.557 2.54-4.031 4.159c-1.451 1.594 2.871 2.028 2.982 3.468c.32 4.146 2.531-.338 1.939-1.812c-1.145-2.855 1.303-2.071 2.289-.257c.547 1.007.963.159 1.633-.192c.543-.283.688 1.25.805 1.517c.385.887 1.65 1.152 1.436 2.294c-.238 1.259-1.133.881-2.008 1.094c-.977.237.158 1.059.016 1.359c-.154.328-1.332.464-1.646.65c-.924.544-.359 1.605-1.082 2.175c-.496.392-.996.137-1.092.871c-.113.865-1.707 1.143-1.5 1.97c.057.227.516 1.923.227 2.013c-.133.043-1.184-1.475-1.471-1.627c-.568-.301-3.15-.055-3.482 1.654c-.215 1.105 1.563 2.85 2.016 1.328c.561-1.873.828 1.091.693 1.207c.268.234 1.836-.385 1.371.7c-.197.459.193 1.656.889 1.287c.291-.154 1.041.31 1.172.061a2.14 2.14 0 0 1 .742-.692c.701-.41 1.75-.025 2.518.02c.469.027 4.313 2.124 4.334 2.545c.084 1.575 2.99 1.37 3.436 1.933c1.199 1.526.83.751-.045 2.706c-.441.984-.057 2.191-1.125 2.904c-.514.342-1.141.171-1.598.655c-.412.437-.25.959-.5 1.464c-.301.601-4.346 4.236-4.613 5.115c-.133.441-1.34.825-.322 1.248c.592.174-1.311 1.973-.396 2.718c.223.181.369.334.479.471c-.457.122-.91.233-1.369.333M35.594 4.237c-.039.145.02.316.271.483c.566.375-.162 1.208-.943.671c-.779-.537-2.531.241-2.41.644c.119.403.66.563 1.496.242c.834-.322 1.178.048 1.318.43c.096.259 0 .403-.027.752c-.025.349-.996.107-1.803.162c-.809.054-1.67-.162-1.645-.619c.027-.456-.861-1.289-1.391-1.637c-.529-.348.232-1.1.934-.537c.699.564.727-.107 1.535-.321c.459-.122.275-.305.119-.479q1.29.047 2.546.209m3.517 8.869c.605.164 1.656.929 1.656 1.291c0 .363-.477.817-.688.765c-1.523-.371-2.807-1.874-3.514-2.697c-1.234-1.435-1.156-.205-3.111-.826c-.5-.16-1.293-1.711-.768-2.476s1.131-.886 1.615-.683c.484.2 1.898-.645 2.223.362c.322 1.007 1.211 2.292 2.02 2.636c.81.342-.04 1.464.567 1.628m.485 4.673c.242.483-1.455-.564-1.859-1.047c-.402-.482-1.01-1.571-.523-2.054c.484-.482 1.57 1.005 2.141 1.33c1.129.645-.001 1.289.241 1.771m-8.594-7.315c.117-.161.365.242.586.645s-.084.971-.586.885c-.502-.084-.281-1.136 0-1.53m0-4.052s.473 1.154 0 .966s-.496-.671 0-.966m.096 3.65c-.135-.321-.166-1.64.162-2.04c.484-.59 1.266.564.74 1.02c-.525.457-.768 1.343-.902 1.02m-6.077 1.415c-.879-.063-.898-.823-1.02-1.226s-.85.765-1.586 0s.172-1.771.01-2.376c-.162-.604 1.736 0 2.02 0s1.051 1.248 1.252 1.227c.203-.02 1.293.987 1.293.584c0-.402.166-1.088.93-1.168c1.172-.121.121 1.289.08 1.838c-.039.549.891 1.504 1.232 1.907c.344.403-.867.686-1.07.443c-.201-.242-.727 0-1.172.322c-.443.322-1.656-.443-2.221-.685c-.566-.241 1.131-.804.252-.866m3.141-6.354c.781.269 1.225.51 1.609 0c.371-.492.654 1.073.385 1.502c-.27.431-.781.324-.863 0c-.08-.32-1.912-1.771-1.131-1.502m1.131 4.859c-.268-.35-.295-.752 0-1.047c.297-.295.201-.644.729-.751c.26-.054.295.348.295.724s.324.859 0 1.448c-.323.589-.754-.026-1.024-.374m2.205-5.969c-.012.074-.061.118-.184.106a.6.6 0 0 1-.236-.095q.21-.008.42-.011M25.389 5.15c.619 0 .539.418 1.051.719c.512.3.242-1.552.592-.854c.35.697 1.389 1.664.889 1.851c-.43.163-2.234.859-2.396.739s-.377-.63-.809-.739c-.432-.107-.889-1.127-1.186-1.1c-.113.01-.123-.184-.049-.442a28 28 0 0 1 1.572-.455c.058.158.146.281.336.281m13.519 30.025c-.645.666-1.756-.464-2.523-.424s-1.152-.765-1.818-.684c-.668.079.182-.847 1.111-.362c.927.483 3.756.925 3.23 1.47m12.93-22.934c-.188.24-.402.408-.607.585c-.605.524-1.736.484-1.898.846s-.566 1.489-1.98 1.494s-1.01 2.131-1.131 2.738s-.443 1.325-.848.801s-.566-.323-1.816-1.853s-.77-2.375-.365-2.818c.404-.442.566-1.49 0-1.329s-.889-.202-.768-.703s.727-.867 0-1.402s-.324-2.445-.889-4.189c-.566-1.745-1.334-.51-2.586-.443s-1.455-.873-.889-1.303a27.95 27.95 0 0 1 13.777 7.576"/>
            </svg>`;
            
            response = new Response(defaultSVG, {
                status: 200,
                headers: {
                    'Content-Type': 'image/svg+xml',
                    'Cache-Control': 'public, max-age=3600' 
                }
            });
            response.headers.set('X-Icon-Cache-Status', 'DEFAULT');
        }
        response.headers.set('Access-Control-Allow-Origin', corsHeaders['Access-Control-Allow-Origin']);
    
    }

    return response;
}

const MIN_BACKUP_INTERVAL_MS = DEFAULT_CONFIG.MIN_BACKUP_INTERVAL_MS;

async function handleSmartBackup(env, currentData) {
    const maxBackups = getConfig(env, 'MAX_BACKUPS');
    
    try {
        const list = await env.CARD_ORDER.list({ prefix: `backup_${DEFAULT_USER}_` });
        let keys = list.keys;
        
        keys.sort((a, b) => a.name.localeCompare(b.name));
        
        let shouldBackup = true;

        if (keys.length > 0) {
            const lastBackupMeta = keys[keys.length - 1].metadata;
            if (lastBackupMeta && lastBackupMeta.timestamp) {
                 const timeDiff = Date.now() - lastBackupMeta.timestamp;
                 if (timeDiff < MIN_BACKUP_INTERVAL_MS) {
                     shouldBackup = false; 
                 }
            }
        }

        if (shouldBackup) {
            const now = Date.now();
            const date = new Date(now + 8 * 3600 * 1000);
            const dateStr = date.toISOString().replace(/[:.]/g, '-');
            const backupKey = `backup_${DEFAULT_USER}_${dateStr}`;
            
            await env.CARD_ORDER.put(backupKey, currentData, {
                metadata: { timestamp: now }
            });

            if (keys.length >= maxBackups) { 
                const deleteCount = keys.length + 1 - maxBackups;
                if(deleteCount > 0) {
                    const toDelete = keys.slice(0, deleteCount);
                    for (const key of toDelete) {
                        await env.CARD_ORDER.delete(key.name);
                    }
                }
            }
        }
    } catch (e) {
        logError("handleSmartBackup", e);
    }
}

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const corsHeaders = getCorsHeaders(env, request);

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        if (url.pathname === '/api/icon') {
            return handleIconProxy(request, ctx, env);
        }

        if (url.pathname === '/') {
            const htmlCacheMaxAge = getConfig(env, 'HTML_CACHE_MAX_AGE');
            return new Response(HTML_CONTENT, { 
                headers: { 
                    'Content-Type': 'text/html; charset=utf-8',
                    'Cache-Control': `public, max-age=${htmlCacheMaxAge}`,
                    'X-Content-Type-Options': 'nosniff',
                    'X-Frame-Options': 'SAMEORIGIN',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'; font-src 'self' data:;"
                } 
            });
        }

        if (url.pathname === '/api/login' && request.method === 'POST') {
            try {
                const { password } = await request.json();
                
                // 使用时序安全的密码比较
                const isPasswordValid = await timingSafeEqual(password || '', env.ADMIN_PASSWORD || '');
                if (!isPasswordValid) throw new Error('Password mismatch');
                
                const currentTime = Math.floor(Date.now() / 1000);
                const accessTokenExpiry = getConfig(env, 'ACCESS_TOKEN_EXPIRY');
                const refreshTokenExpiry = getConfig(env, 'REFRESH_TOKEN_EXPIRY');

                const accessTokenPayload = { 
                    iat: currentTime, 
                    exp: currentTime + accessTokenExpiry, 
                    role: 'admin',
                    type: 'access' 
                };
                const accessToken = await createJWT(accessTokenPayload, env.JWT_SECRET);
                
                const refreshTokenPayload = { 
                    iat: currentTime, 
                    exp: currentTime + refreshTokenExpiry, 
                    role: 'admin',
                    type: 'refresh' 
                };
                const refreshToken = await createJWT(refreshTokenPayload, env.JWT_SECRET);
                
                logInfo('login', 'Login successful');
                
                const response = new Response(JSON.stringify({ 
                    valid: true, 
                    token: `Bearer ${accessToken}` 
                }), { 
                    status: 200, 
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
                });
                
                response.headers.append('Set-Cookie', `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict; Path=/api/refreshToken; Max-Age=${refreshTokenExpiry}`);
                
                return response;
            } catch (e) {
                logError('login', e);
                return new Response(JSON.stringify({ valid: false, error: 'Auth failed' }), { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
            }
        }

        if (url.pathname === '/api/refreshToken' && request.method === 'POST') {
            try {
                const cookies = parseCookie(request.headers.get('Cookie'));
                const refreshToken = cookies.refreshToken;
                
                if (!refreshToken) {
                    return new Response(JSON.stringify({ error: 'Refresh token missing' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
                }
                
                const payload = await validateJWT(refreshToken, env.JWT_SECRET);
                const currentTime = Math.floor(Date.now() / 1000);

                if (!payload || payload.exp < currentTime) {
                    return new Response(JSON.stringify({ error: 'Refresh token expired' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
                }
                
                if (payload.type !== 'refresh') {
                    return new Response(JSON.stringify({ error: 'Invalid token type' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
                }
                
                const accessTokenExpiry = getConfig(env, 'ACCESS_TOKEN_EXPIRY');
                const refreshTokenExpiry = getConfig(env, 'REFRESH_TOKEN_EXPIRY');
                
                const newAccessTokenPayload = { 
                    iat: currentTime, 
                    exp: currentTime + accessTokenExpiry, 
                    role: 'admin',
                    type: 'access'
                };
                const newAccessToken = await createJWT(newAccessTokenPayload, env.JWT_SECRET);

                const newRefreshTokenPayload = {
                    iat: currentTime,
                    exp: currentTime + refreshTokenExpiry,
                    role: 'admin',
                    type: 'refresh'
                };
                const newRefreshToken = await createJWT(newRefreshTokenPayload, env.JWT_SECRET);
                
                const response = new Response(JSON.stringify({ 
                    accessToken: `Bearer ${newAccessToken}` 
                }), { 
                    status: 200, 
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
                });

                response.headers.append('Set-Cookie', `refreshToken=${newRefreshToken}; HttpOnly; Secure; SameSite=Strict; Path=/api/refreshToken; Max-Age=${refreshTokenExpiry}`);

                return response;
            } catch (e) {
                logError('refreshToken', e);
                return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
            }
        }

        if (url.pathname === '/api/validateToken') {
            const validation = await validateServerToken(request.headers.get('Authorization'), env);
            return new Response(JSON.stringify(validation.isValid ? { valid: true } : validation.response), {
                status: validation.status || 200, 
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        if (url.pathname === '/api/getLinks') {
            const authToken = request.headers.get('Authorization');
            const dataStr = await env.CARD_ORDER.get(DEFAULT_USER);

            if (dataStr) {
                const parsedData = JSON.parse(dataStr);
                const normalizedCategories = normalizeCategories(parsedData.categories || {});
                let isAuthorized = false;

                if (authToken) {
                    const validation = await validateServerToken(authToken, env);
                    if (validation.isValid) {
                        isAuthorized = true;
                    }
                }

                if (isAuthorized) {
                    return new Response(JSON.stringify(parsedData), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
                }

                const filteredCategories = {};
                for (const cat in normalizedCategories) {
                    const catData = normalizedCategories[cat];
                    if (!catData.isHidden) {
                        const publicLinks = (catData.links || []).filter(l => !l.isPrivate);
                        if (publicLinks.length > 0) {
                            filteredCategories[cat] = { ...catData, links: publicLinks };
                        }
                    }
                }
                return new Response(JSON.stringify({ categories: filteredCategories }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
            }
            return new Response(JSON.stringify({ categories: {} }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
        }

        if (url.pathname === '/api/saveData' && request.method === 'POST') {
            const validation = await validateServerToken(request.headers.get('Authorization'), env);
            if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });

            try {
                const { categories } = await request.json();
                
                const currentData = await env.CARD_ORDER.get(DEFAULT_USER);
                
                if (currentData) {
                    ctx.waitUntil(handleSmartBackup(env, currentData));
                }

                await env.CARD_ORDER.put(DEFAULT_USER, JSON.stringify({ categories }));
                
                return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
            } catch (e) {
                logError('saveData', e);
                return new Response(JSON.stringify({ error: 'Bad Request' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
            }
        }

        if (url.pathname === '/api/backupData' && request.method === 'POST') {
            const validation = await validateServerToken(request.headers.get('Authorization'), env);
            if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
            
            const sourceData = await env.CARD_ORDER.get(DEFAULT_USER);
            
            if(sourceData) {
                 const now = Date.now();
                 const date = new Date(now + 8 * 3600 * 1000);
                 const dateStr = date.toISOString().replace(/[:.]/g, '-');
                 await env.CARD_ORDER.put(`backup_${DEFAULT_USER}_${dateStr}`, sourceData, {
                     metadata: { timestamp: now }
                 });
                 
                 return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
            }
            return new Response(JSON.stringify({ success: false, error: 'User data not found' }), { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
        }
        
        if (url.pathname === '/api/exportData' && request.method === 'POST') {
             const validation = await validateServerToken(request.headers.get('Authorization'), env);
             if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
             
             const data = await env.CARD_ORDER.get(DEFAULT_USER);
             return new Response(data || '{}', { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
        }
        
        if (url.pathname === '/api/importData' && request.method === 'POST') {
             const validation = await validateServerToken(request.headers.get('Authorization'), env);
             if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
              
             const body = await request.json();
             
             const cleanData = {
                 categories: body.categories || {}
             };
             
             await env.CARD_ORDER.put(DEFAULT_USER, JSON.stringify(cleanData));
             return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json'} });
        }

        return new Response('Not Found', { status: 404, headers: corsHeaders });
    }
};
