const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="zh-CN" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Tab - 我的导航</title>
    <meta name="description" content="Cloudflare Workers 上的轻量化导航页面">
    <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22grad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%2310b981%3Bstop-opacity%3A1%22%20%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%230d9488%3Bstop-opacity%3A1%22%20%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22128%22%20height%3D%22128%22%20rx%3D%2224%22%20fill%3D%22url%28%23grad%29%22%2F%3E%3Cpath%20d%3D%22M64%2024l12.36%2025.04L104%2054.1l-20%2020.48%204.72%2027.52L64%2088.89%2039.28%20101.1%2044%2073.58%2024%2054.1l27.64-5.06L64%2024z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E">
    <!-- BEGIN TAILWIND CSS（勿手动编辑） -->
    <style id="tailwind-css">
*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--font-sans);font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media (min-width:640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width:768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width:1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width:1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width:1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.bottom-8{bottom:2rem}.bottom-\\[-10\\%\\]{bottom:-10%}.left-0{left:0}.left-\\[-10\\%\\]{left:-10%}.right-0{right:0}.right-1{right:.25rem}.right-1\\.5{right:.375rem}.right-2{right:.5rem}.right-8{right:2rem}.right-\\[-10\\%\\]{right:-10%}.right-\\[-4px\\]{right:-4px}.top-0{top:0}.top-1{top:.25rem}.top-1\\/2{top:50%}.top-2{top:.5rem}.top-6{top:1.5rem}.top-\\[-4px\\]{top:-4px}.top-\\[-5\\%\\]{top:-5%}.top-full{top:100%}.isolate{isolation:isolate}.-z-10{z-index:-10}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.z-\\[110\\]{z-index:110}.z-\\[60\\]{z-index:60}.z-\\[65\\]{z-index:65}.z-\\[70\\]{z-index:70}.z-\\[80\\]{z-index:80}.z-\\[90\\]{z-index:90}.z-\\[95\\]{z-index:95}.mx-0{margin-left:0;margin-right:0}.mx-0\\.5{margin-left:.125rem;margin-right:.125rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-top:.25rem}.mb-1,.my-1{margin-bottom:.25rem}.mb-1\\.5{margin-bottom:.375rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-auto{margin-left:auto}.mr-1{margin-right:.25rem}.mt-1{margin-top:.25rem}.mt-12{margin-top:3rem}.mt-2{margin-top:.5rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.\\!grid{display:grid!important}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-16{height:4rem}.h-3{height:.75rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[500px\\]{height:500px}.h-\\[800px\\]{height:800px}.h-\\[92vh\\]{height:92vh}.h-full{height:100%}.h-px{height:1px}.max-h-48{max-height:12rem}.max-h-\\[760px\\]{max-height:760px}.min-h-0{min-height:0}.min-h-\\[1\\.25rem\\]{min-height:1.25rem}.min-h-\\[100px\\]{min-height:100px}.min-h-screen{min-height:100vh}.w-1{width:.25rem}.w-1\\.5{width:.375rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-14{width:3.5rem}.w-16{width:4rem}.w-24{width:6rem}.w-28{width:7rem}.w-3{width:.75rem}.w-3\\.5{width:.875rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[120\\%\\]{width:120%}.w-\\[500px\\]{width:500px}.w-\\[800px\\]{width:800px}.w-auto{width:auto}.w-full{width:100%}.w-px{width:1px}.min-w-0{min-width:0}.min-w-\\[130px\\]{min-width:130px}.max-w-2xl{max-width:42rem}.max-w-7xl{max-width:80rem}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0,.shrink-0{flex-shrink:0}.basis-full{flex-basis:100%}.origin-top-right{transform-origin:top right}.-translate-y-0{--tw-translate-y:-0px}.-translate-y-0,.-translate-y-1{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1{--tw-translate-y:-0.25rem}.-translate-y-1\\/2{--tw-translate-y:-50%}.-translate-y-1\\/2,.translate-x-1{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1{--tw-translate-x:0.25rem}.translate-x-1\\/2{--tw-translate-x:50%}.rotate-45,.translate-x-1\\/2{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate:45deg}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-move{cursor:move}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize-y{resize:vertical}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.gap-x-1{-moz-column-gap:.25rem;column-gap:.25rem}.gap-y-1\\.5{row-gap:.375rem}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.content-start{align-content:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-y-2{row-gap:.5rem}.gap-y-6{row-gap:1.5rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem*var(--tw-space-y-reverse))}.space-y-10>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2.5rem*var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.rounded-2xl{border-radius:1rem}.rounded-\\[1\\.2rem\\]{border-radius:1.2rem}.rounded-\\[var\\(--radius-2xl\\)\\]{border-radius:var(--radius-2xl)}.rounded-\\[var\\(--radius-lg\\)\\]{border-radius:var(--radius-lg)}.rounded-\\[var\\(--radius-xl\\)\\]{border-radius:var(--radius-xl)}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.rounded-l-\\[var\\(--radius-xl\\)\\]{border-top-left-radius:var(--radius-xl);border-bottom-left-radius:var(--radius-xl)}.rounded-r-\\[var\\(--radius-xl\\)\\]{border-top-right-radius:var(--radius-xl);border-bottom-right-radius:var(--radius-xl)}.rounded-tr-\\[var\\(--radius-2xl\\)\\]{border-top-right-radius:var(--radius-2xl)}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-dashed{border-style:dashed}.border-none{border-style:none}.\\!border-amber-200{--tw-border-opacity:1!important;border-color:rgb(253 230 138/var(--tw-border-opacity,1))!important}.\\!border-amber-700{--tw-border-opacity:1!important;border-color:rgb(180 83 9/var(--tw-border-opacity,1))!important}.border-\\[color-mix\\(in_oklab\\2c var\\(--border\\)_40\\%\\2c transparent\\)\\]{border-color:color-mix(in oklab,var(--border) 40%,transparent)}.border-\\[color-mix\\(in_oklab\\2c var\\(--border\\)_50\\%\\2c transparent\\)\\]{border-color:color-mix(in oklab,var(--border) 50%,transparent)}.border-\\[color-mix\\(in_oklab\\2c var\\(--border\\)_60\\%\\2c transparent\\)\\]{border-color:color-mix(in oklab,var(--border) 60%,transparent)}.border-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)\\2c var\\(--border\\)\\)\\]{border-color:color-mix(in oklab,var(--muted),var(--border))}.border-accent{border-color:var(--primary)}.border-line{border-color:var(--border)}.border-line-input{border-color:var(--input)}.border-transparent{border-color:transparent}.\\!bg-red-500{--tw-bg-opacity:1!important;background-color:rgb(239 68 68/var(--tw-bg-opacity,1))!important}.\\!bg-red-500\\/10{background-color:rgba(239,68,68,.1)!important}.bg-\\[color-mix\\(in_oklab\\2c color-mix\\(in_oklab\\2c var\\(--primary\\)_45\\%\\2c var\\(--background\\)\\)_30\\%\\2c transparent\\)\\]{background-color:color-mix(in oklab,color-mix(in oklab,var(--primary) 45%,var(--background)) 30%,transparent)}.bg-\\[color-mix\\(in_oklab\\2c var\\(--background\\)_80\\%\\2c transparent\\)\\]{background-color:color-mix(in oklab,var(--background) 80%,transparent)}.bg-\\[color-mix\\(in_oklab\\2c var\\(--card\\)_45\\%\\2c transparent\\)\\]{background-color:color-mix(in oklab,var(--card) 45%,transparent)}.bg-\\[color-mix\\(in_oklab\\2c var\\(--card\\)_85\\%\\2c transparent\\)\\]{background-color:color-mix(in oklab,var(--card) 85%,transparent)}.bg-\\[color-mix\\(in_oklab\\2c var\\(--card\\)_90\\%\\2c transparent\\)\\]{background-color:color-mix(in oklab,var(--card) 90%,transparent)}.bg-\\[color-mix\\(in_oklab\\2c var\\(--card\\)_90\\%\\2c var\\(--background\\)\\)\\]{background-color:color-mix(in oklab,var(--card) 90%,var(--background))}.bg-\\[color-mix\\(in_oklab\\2c var\\(--foreground\\)_35\\%\\2c var\\(--card\\)\\)\\]{background-color:color-mix(in oklab,var(--foreground) 35%,var(--card))}.bg-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)_70\\%\\2c transparent\\)\\]{background-color:color-mix(in oklab,var(--muted) 70%,transparent)}.bg-accent{background-color:var(--primary)}.bg-amber-400{--tw-bg-opacity:1;background-color:rgb(251 191 36/var(--tw-bg-opacity,1))}.bg-amber-900{--tw-bg-opacity:1;background-color:rgb(120 53 15/var(--tw-bg-opacity,1))}.bg-base{background-color:var(--background)}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity,1))}.bg-black\\/50{background-color:rgba(0,0,0,.5)}.bg-black\\/60{background-color:rgba(0,0,0,.6)}.bg-black\\/70{background-color:rgba(0,0,0,.7)}.bg-blue-300{--tw-bg-opacity:1;background-color:rgb(147 197 253/var(--tw-bg-opacity,1))}.bg-blue-300\\/30{background-color:rgba(147,197,253,.3)}.bg-blue-900{--tw-bg-opacity:1;background-color:rgb(30 58 138/var(--tw-bg-opacity,1))}.bg-card{background-color:var(--card)}.bg-line{background-color:var(--border)}.bg-line-input{background-color:var(--input)}.bg-muted{background-color:var(--muted)}.bg-purple-600{--tw-bg-opacity:1;background-color:rgb(147 51 234/var(--tw-bg-opacity,1))}.bg-red-900{--tw-bg-opacity:1;background-color:rgb(127 29 29/var(--tw-bg-opacity,1))}.bg-secondary{background-color:var(--secondary)}.bg-slate-900{--tw-bg-opacity:1;background-color:rgb(15 23 42/var(--tw-bg-opacity,1))}.bg-slate-900\\/50{background-color:rgba(15,23,42,.5)}.bg-soft{background-color:var(--accent)}.bg-transparent{background-color:transparent}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.bg-gradient-to-tr{background-image:linear-gradient(to top right,var(--tw-gradient-stops))}.from-\\[var\\(--background\\)\\]{--tw-gradient-from:var(--background) var(--tw-gradient-from-position);--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-accent{--tw-gradient-from:var(--primary) var(--tw-gradient-from-position);--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-\\[var\\(--secondary\\)\\]{--tw-gradient-to:var(--secondary) var(--tw-gradient-to-position)}.to-teal-600{--tw-gradient-to:#0d9488 var(--tw-gradient-to-position)}.object-contain{-o-object-fit:contain;object-fit:contain}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-3\\.5{padding-top:.875rem;padding-bottom:.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-2{padding-bottom:.5rem}.pb-20{padding-bottom:5rem}.pb-4{padding-bottom:1rem}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pr-2{padding-right:.5rem}.pr-\\[72px\\]{padding-right:72px}.pt-2{padding-top:.5rem}.pt-3{padding-top:.75rem}.pt-36{padding-top:9rem}.text-left{text-align:left}.text-center{text-align:center}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-sans{font-family:var(--font-sans)}.text-\\[10px\\]{font-size:10px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.625}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.\\!text-red-600{--tw-text-opacity:1!important;color:rgb(220 38 38/var(--tw-text-opacity,1))!important}.text-accent{color:var(--primary)}.text-accent-foreground{color:var(--primary-foreground)}.text-amber-600{--tw-text-opacity:1;color:rgb(217 119 6/var(--tw-text-opacity,1))}.text-base{color:var(--background)}.text-base-foreground{color:var(--foreground)}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity,1))}.text-muted-foreground{color:var(--muted-foreground)}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}.shadow-2xl,.shadow-glass{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-glass{--tw-shadow:0 4px 30px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 30px var(--tw-shadow-color)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color)}.shadow-inner,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-md,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring-1,.ring-2{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.ring-amber-400{--tw-ring-opacity:1;--tw-ring-color:rgb(251 191 36/var(--tw-ring-opacity,1))}.ring-amber-400\\/40{--tw-ring-color:rgba(251,191,36,.4)}.ring-black{--tw-ring-opacity:1;--tw-ring-color:rgb(0 0 0/var(--tw-ring-opacity,1))}.ring-black\\/5{--tw-ring-color:rgba(0,0,0,.05)}.ring-white{--tw-ring-opacity:1;--tw-ring-color:rgb(255 255 255/var(--tw-ring-opacity,1))}.blur-\\[120px\\]{--tw-blur:blur(120px)}.blur-\\[120px\\],.drop-shadow-sm{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.drop-shadow-sm{--tw-drop-shadow:drop-shadow(0 1px 1px rgba(0,0,0,.05))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(12px)}.backdrop-blur-md,.backdrop-blur-sm{-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-sm{--tw-backdrop-blur:blur(4px)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[transform\\2c box-shadow\\2c border-color\\]{transition-property:transform,box-shadow,border-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition-transform{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.8\\2c 0\\.25\\2c 1\\)\\]{transition-timing-function:cubic-bezier(.25,.8,.25,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.\\[transform\\:translateZ\\(0\\)\\]{transform:translateZ(0)}.placeholder\\:text-muted-foreground::-moz-placeholder{color:var(--muted-foreground)}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:left-\\[2px\\]:after{content:var(--tw-content);left:2px}.after\\:top-\\[2px\\]:after{content:var(--tw-content);top:2px}.after\\:h-4:after{content:var(--tw-content);height:1rem}.after\\:w-4:after{content:var(--tw-content);width:1rem}.after\\:rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:border:after{content:var(--tw-content);border-width:1px}.after\\:border-\\[color-mix\\(in_oklab\\2c var\\(--muted-foreground\\)_40\\%\\2c var\\(--card\\)\\)\\]:after{content:var(--tw-content);border-color:color-mix(in oklab,var(--muted-foreground) 40%,var(--card))}.after\\:bg-white:after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.after\\:transition-all:after{content:var(--tw-content);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.after\\:content-\\[\\'\\'\\]:after{--tw-content:"";content:var(--tw-content)}.focus-within\\:-translate-y-0\\.5:focus-within{--tw-translate-y:-0.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.focus-within\\:shadow-lg:focus-within{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus-within\\:ring-2:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-within\\:ring-\\[color-mix\\(in_oklab\\2c var\\(--ring\\)_50\\%\\2c transparent\\)\\]:focus-within{--tw-ring-color:color-mix(in oklab,var(--ring) 50%,transparent)}.hover\\:z-10:hover{z-index:10}.hover\\:-translate-y-0\\.5:hover{--tw-translate-y:-0.125rem}.hover\\:-translate-y-0\\.5:hover,.hover\\:-translate-y-1:hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:-translate-y-1:hover{--tw-translate-y:-0.25rem}.hover\\:-translate-y-1\\.5:hover{--tw-translate-y:-0.375rem}.hover\\:-translate-y-1\\.5:hover,.hover\\:translate-y-\\[-1px\\]:hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:translate-y-\\[-1px\\]:hover{--tw-translate-y:-1px}.hover\\:translate-y-\\[-2px\\]:hover{--tw-translate-y:-2px}.hover\\:scale-105:hover,.hover\\:translate-y-\\[-2px\\]:hover{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:scale-105:hover{--tw-scale-x:1.05;--tw-scale-y:1.05}.hover\\:scale-110:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-\\[color-mix\\(in_oklab\\2c var\\(--primary\\)_50\\%\\2c transparent\\)\\]:hover{border-color:color-mix(in oklab,var(--primary) 50%,transparent)}.hover\\:border-accent:hover{border-color:var(--primary)}.hover\\:border-line:hover{border-color:var(--border)}.hover\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--accent\\)_50\\%\\2c transparent\\)\\]:hover{background-color:color-mix(in oklab,var(--accent) 50%,transparent)}.hover\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--card\\)_75\\%\\2c transparent\\)\\]:hover{background-color:color-mix(in oklab,var(--card) 75%,transparent)}.hover\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)_80\\%\\2c transparent\\)\\]:hover{background-color:color-mix(in oklab,var(--muted) 80%,transparent)}.hover\\:bg-\\[var\\(--menu-hover\\)\\]:hover{background-color:var(--menu-hover)}.hover\\:bg-accent:hover{background-color:var(--primary)}.hover\\:bg-amber-100:hover{--tw-bg-opacity:1;background-color:rgb(254 243 199/var(--tw-bg-opacity,1))}.hover\\:bg-blue-100:hover{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity,1))}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-red-100:hover{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity,1))}.hover\\:bg-red-50:hover{--tw-bg-opacity:1;background-color:rgb(254 242 242/var(--tw-bg-opacity,1))}.hover\\:bg-secondary:hover{background-color:var(--secondary)}.hover\\:bg-soft:hover{background-color:var(--accent)}.hover\\:text-accent:hover{color:var(--primary)}.hover\\:text-accent-foreground:hover{color:var(--primary-foreground)}.hover\\:text-amber-600:hover{--tw-text-opacity:1;color:rgb(217 119 6/var(--tw-text-opacity,1))}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.hover\\:text-green-600:hover{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.hover\\:text-muted-foreground:hover{color:var(--muted-foreground)}.hover\\:text-red-500:hover{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.hover\\:text-red-600:hover{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity,1))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow-\\[0_8px_20px_-6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\]:hover{--tw-shadow:0 8px 20px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 8px 20px -6px var(--tw-shadow-color)}.hover\\:shadow-\\[0_8px_20px_-6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\]:hover,.hover\\:shadow-lg:hover{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.hover\\:shadow-md:hover,.hover\\:shadow-sm:hover{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.focus\\:border-accent:focus{border-color:var(--primary)}.focus\\:border-transparent:focus{border-color:transparent}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-0:focus,.focus\\:ring-2:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-\\[color-mix\\(in_oklab\\2c var\\(--ring\\)_50\\%\\2c transparent\\)\\]:focus{--tw-ring-color:color-mix(in oklab,var(--ring) 50%,transparent)}.focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.active\\:scale-95:active{--tw-scale-x:.95;--tw-scale-y:.95}.active\\:scale-95:active,.group:hover .group-hover\\:rotate-3{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:rotate-3{--tw-rotate:3deg}.group:hover .group-hover\\:scale-105{--tw-scale-x:1.05;--tw-scale-y:1.05}.group:hover .group-hover\\:scale-105,.group:hover .group-hover\\:scale-110{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:scale-110{--tw-scale-x:1.1;--tw-scale-y:1.1}.group:hover .group-hover\\:bg-soft{background-color:var(--accent)}.group:hover .group-hover\\:text-accent{color:var(--primary)}.group:hover .group-hover\\:text-muted-foreground{color:var(--muted-foreground)}.group:active .group-active\\:scale-95{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:checked~.peer-checked\\:border-accent{border-color:var(--primary)}.peer:checked~.peer-checked\\:bg-accent{background-color:var(--primary)}.peer:checked~.peer-checked\\:after\\:translate-x-full:after{content:var(--tw-content);--tw-translate-x:100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.peer:checked~.peer-checked\\:after\\:border-white:after{content:var(--tw-content);--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity,1))}.peer:focus~.peer-focus\\:outline-none{outline:2px solid transparent;outline-offset:2px}.dark\\:\\!border-amber-700\\/50:is(.dark *){border-color:rgba(180,83,9,.5)!important}.dark\\:border-\\[color-mix\\(in_oklab\\2c var\\(--border\\)_40\\%\\2c transparent\\)\\]:is(.dark *){border-color:color-mix(in oklab,var(--border) 40%,transparent)}.dark\\:border-\\[color-mix\\(in_oklab\\2c var\\(--border\\)_50\\%\\2c transparent\\)\\]:is(.dark *){border-color:color-mix(in oklab,var(--border) 50%,transparent)}.dark\\:border-\\[color-mix\\(in_oklab\\2c var\\(--border\\)_60\\%\\2c transparent\\)\\]:is(.dark *){border-color:color-mix(in oklab,var(--border) 60%,transparent)}.dark\\:border-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)_70\\%\\2c var\\(--border\\)\\)\\]:is(.dark *){border-color:color-mix(in oklab,var(--muted) 70%,var(--border))}.dark\\:border-\\[color-mix\\(in_oklab\\2c var\\(--muted-foreground\\)_40\\%\\2c var\\(--card\\)\\)\\]:is(.dark *){border-color:color-mix(in oklab,var(--muted-foreground) 40%,var(--card))}.dark\\:border-line:is(.dark *){border-color:var(--border)}.dark\\:border-line-input:is(.dark *){border-color:var(--input)}.dark\\:border-transparent:is(.dark *){border-color:transparent}.dark\\:bg-\\[color-mix\\(in_oklab\\2c color-mix\\(in_oklab\\2c var\\(--primary\\)_25\\%\\2c var\\(--background\\)\\)_30\\%\\2c transparent\\)\\]:is(.dark *){background-color:color-mix(in oklab,color-mix(in oklab,var(--primary) 25%,var(--background)) 30%,transparent)}.dark\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--background\\)_85\\%\\2c transparent\\)\\]:is(.dark *){background-color:color-mix(in oklab,var(--background) 85%,transparent)}.dark\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--card\\)_60\\%\\2c transparent\\)\\]:is(.dark *){background-color:color-mix(in oklab,var(--card) 60%,transparent)}.dark\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--card\\)_90\\%\\2c var\\(--background\\)\\)\\]:is(.dark *){background-color:color-mix(in oklab,var(--card) 90%,var(--background))}.dark\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)_25\\%\\2c transparent\\)\\]:is(.dark *){background-color:color-mix(in oklab,var(--muted) 25%,transparent)}.dark\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)_50\\%\\2c transparent\\)\\]:is(.dark *){background-color:color-mix(in oklab,var(--muted) 50%,transparent)}.dark\\:bg-accent:is(.dark *){background-color:var(--primary)}.dark\\:bg-amber-900\\/10:is(.dark *){background-color:rgba(120,53,15,.1)}.dark\\:bg-base:is(.dark *){background-color:var(--background)}.dark\\:bg-card:is(.dark *){background-color:var(--card)}.dark\\:bg-line-input:is(.dark *){background-color:var(--input)}.dark\\:bg-muted:is(.dark *){background-color:var(--muted)}.dark\\:bg-purple-600\\/20:is(.dark *){background-color:rgba(147,51,234,.2)}.dark\\:bg-soft:is(.dark *){background-color:var(--accent)}.dark\\:bg-transparent:is(.dark *){background-color:transparent}.dark\\:from-\\[var\\(--background\\)\\]:is(.dark *){--tw-gradient-from:var(--background) var(--tw-gradient-from-position);--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.dark\\:to-\\[var\\(--card\\)\\]:is(.dark *){--tw-gradient-to:var(--card) var(--tw-gradient-to-position)}.dark\\:\\!text-red-400:is(.dark *){--tw-text-opacity:1!important;color:rgb(248 113 113/var(--tw-text-opacity,1))!important}.dark\\:text-amber-400:is(.dark *){--tw-text-opacity:1;color:rgb(251 191 36/var(--tw-text-opacity,1))}.dark\\:text-base-foreground:is(.dark *){color:var(--foreground)}.dark\\:text-muted-foreground:is(.dark *){color:var(--muted-foreground)}.dark\\:text-white:is(.dark *){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.dark\\:shadow-none:is(.dark *){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.dark\\:ring-white\\/10:is(.dark *){--tw-ring-color:hsla(0,0%,100%,.1)}.dark\\:hover\\:border-\\[color-mix\\(in_oklab\\2c var\\(--primary\\)_50\\%\\2c transparent\\)\\]:hover:is(.dark *){border-color:color-mix(in oklab,var(--primary) 50%,transparent)}.dark\\:hover\\:border-accent:hover:is(.dark *){border-color:var(--primary)}.dark\\:hover\\:border-line:hover:is(.dark *){border-color:var(--border)}.dark\\:hover\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)_40\\%\\2c transparent\\)\\]:hover:is(.dark *){background-color:color-mix(in oklab,var(--muted) 40%,transparent)}.dark\\:hover\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--muted\\)_60\\%\\2c transparent\\)\\]:hover:is(.dark *){background-color:color-mix(in oklab,var(--muted) 60%,transparent)}.dark\\:hover\\:bg-\\[color-mix\\(in_oklab\\2c var\\(--secondary\\)_50\\%\\2c transparent\\)\\]:hover:is(.dark *){background-color:color-mix(in oklab,var(--secondary) 50%,transparent)}.dark\\:hover\\:bg-\\[var\\(--menu-hover\\)\\]:hover:is(.dark *){background-color:var(--menu-hover)}.dark\\:hover\\:bg-accent:hover:is(.dark *){background-color:var(--primary)}.dark\\:hover\\:bg-amber-900\\/30:hover:is(.dark *){background-color:rgba(120,53,15,.3)}.dark\\:hover\\:bg-blue-900\\/30:hover:is(.dark *){background-color:rgba(30,58,138,.3)}.dark\\:hover\\:bg-card:hover:is(.dark *){background-color:var(--card)}.dark\\:hover\\:bg-muted:hover:is(.dark *){background-color:var(--muted)}.dark\\:hover\\:bg-red-900\\/20:hover:is(.dark *){background-color:rgba(127,29,29,.2)}.dark\\:hover\\:bg-red-900\\/30:hover:is(.dark *){background-color:rgba(127,29,29,.3)}.dark\\:hover\\:bg-soft:hover:is(.dark *){background-color:var(--accent)}.dark\\:hover\\:text-accent:hover:is(.dark *){color:var(--primary)}.dark\\:hover\\:text-amber-400:hover:is(.dark *){--tw-text-opacity:1;color:rgb(251 191 36/var(--tw-text-opacity,1))}.dark\\:hover\\:text-base-foreground:hover:is(.dark *){color:var(--foreground)}.dark\\:hover\\:text-blue-400:hover:is(.dark *){--tw-text-opacity:1;color:rgb(96 165 250/var(--tw-text-opacity,1))}.dark\\:hover\\:text-green-400:hover:is(.dark *){--tw-text-opacity:1;color:rgb(74 222 128/var(--tw-text-opacity,1))}.dark\\:hover\\:text-red-400:hover:is(.dark *){--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1))}.dark\\:hover\\:shadow-\\[0_8px_20px_-6px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.4\\)\\]:hover:is(.dark *){--tw-shadow:0 8px 20px -6px rgba(0,0,0,.4);--tw-shadow-colored:0 8px 20px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.group:hover .dark\\:group-hover\\:bg-soft:is(.dark *){background-color:var(--accent)}.group:hover .dark\\:group-hover\\:text-accent:is(.dark *){color:var(--primary)}.group:hover .dark\\:group-hover\\:text-base-foreground:is(.dark *){color:var(--foreground)}@media (min-width:640px){.sm\\:block{display:block}.sm\\:h-16{height:4rem}.sm\\:w-16{width:4rem}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:768px){.md\\:block{display:block}.md\\:inline{display:inline}.md\\:min-w-\\[5\\.5rem\\]{min-width:5.5rem}.md\\:basis-auto{flex-basis:auto}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.lg\\:px-8{padding-left:2rem;padding-right:2rem}}@media (min-width:1280px){.xl\\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}
    @media (min-width:640px){.sm\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}@media (min-width:768px){.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.lg\\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr))}}@media (min-width:1280px){.xl\\:grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.xl\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}</style>
    <!-- END TAILWIND CSS -->
    <style>
        /* ===== 主题 CSS 变量 ===== */
        :root {
            --background: #ffffff; --foreground: #1e293b;
            --card: #ffffff;       --card-foreground: #0f172a;
            --primary: #10b981;    --primary-foreground: #ffffff;
            --secondary: #f8fafc;  --secondary-foreground: #334155;
            --muted: #f1f5f9;      --muted-foreground: #64748b;
            --accent: #ecfdf5;     --accent-foreground: #059669;
            --accent-soft: rgba(16, 185, 129, 0.1);
            --border: #e2e8f0;     --input: #cbd5e1;
            --ring: #10b981;       --radius: 1rem;
            --menu-hover: color-mix(in srgb, var(--foreground) 8%, var(--card));
            --font-sans: 'Inter', 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', system-ui, sans-serif;
            /* 圆角派生体系：默认 --radius=1rem 时与改造前的固定 rem 观感一致，主题改 --radius 后整体缩放 */
            --radius-sm: calc(var(--radius) * 0.25);
            --radius-md: calc(var(--radius) * 0.375);
            --radius-lg: calc(var(--radius) * 0.5);
            --radius-xl: calc(var(--radius) * 0.75);
            --radius-2xl: var(--radius);
        }
        .dark {
            --background: #0f172a; --foreground: #f1f5f9;
            --card: #1e293b;       --card-foreground: #f8fafc;
            --primary: #34d399;    --primary-foreground: #064e3b;
            --secondary: #1e293b;  --secondary-foreground: #cbd5e1;
            --muted: #1e293b;      --muted-foreground: #94a3b8;
            --accent: #0f172a;     --accent-foreground: #34d399;
            --accent-soft: rgba(52, 211, 153, 0.15);
            --border: #334155;     --input: #475569;
            --ring: #34d399;
            --menu-hover: color-mix(in srgb, var(--foreground) 16%, var(--card));
        }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--foreground) 18%, transparent); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: color-mix(in srgb, var(--foreground) 35%, transparent); }

        ::selection {
            background: color-mix(in srgb, var(--primary) 45%, var(--background));
            color: var(--foreground);
        }
        input::selection, textarea::selection, select::selection,
        [contenteditable="true"]::selection,
        input ::selection, textarea ::selection, select ::selection,
        [contenteditable="true"] ::selection {
            background: color-mix(in srgb, var(--primary) 55%, var(--background));
            color: var(--card-foreground);
        }

        .loading-spinner-track { border: 4px solid #e2e8f0; }
        .dark .loading-spinner-track { border-color: #334155; }
        .loading-spinner-arc { border: 4px solid transparent; border-top-color: var(--primary); }
        .dark .loading-spinner-arc { border-top-color: var(--primary); }
        .icon-spinner { border: 2px solid #cbd5e1; border-top-color: var(--primary); }
        .dark .icon-spinner { border-color: #475569; border-top-color: var(--primary); }

        @media (max-width: 640px) {
            ::-webkit-scrollbar { display: none; }
            * { scrollbar-width: none; /* Firefox */ }
        }
        
        .card.dragging {
            opacity: 0.8;
            transform: scale(1.05);
            border: 2px dashed var(--primary);
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

        /* 分类标签拖拽排序 */
        .category-button[draggable="true"] { cursor: grab; }
        .category-button[draggable="true"]:active { cursor: grabbing; }
        .category-button.dragging {
            opacity: 0.45;
            border-style: dashed;
            border-color: var(--accent);
        }
        .category-button.drag-over {
            border-color: var(--accent);
            box-shadow: 0 0 0 2px color-mix(in oklab, var(--accent) 45%, transparent);
        }
        
        .category-button.text-muted-foreground {
            color: color-mix(in oklab, var(--muted-foreground) 70%, var(--foreground));
        }
        .dark .category-button.text-muted-foreground {
            color: color-mix(in oklab, var(--muted-foreground) 55%, var(--foreground));
        }

        .category-button.bg-accent:hover {
            background-color: color-mix(in oklab, var(--foreground) 12%, var(--primary));
        }

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

        .theme-card { cursor: pointer; box-shadow: 0 1px 2px rgba(0,0,0,0.03); }
        .theme-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.10); }
        .theme-card-active { box-shadow: 0 0 0 2px var(--ring-color, rgba(99,102,241,0.5)) inset, 0 8px 24px rgba(0,0,0,0.10); }
        .theme-card-disabled { opacity: 0.5; pointer-events: none; cursor: not-allowed; }

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

        .card-status-tag {
            display: none;
            align-items: center;
            gap: 4px;
            font-size: 11px;
            font-weight: 500;
            line-height: 1.4;
            padding: 2px 8px;
            border-radius: 9999px;
            white-space: nowrap;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.28s ease;
        }
        .card-status-tag.visible {
            display: inline-flex;
            opacity: 1;
        }
        .card-status-tag.checking {
            background: rgba(234, 179, 8, 0.15);
            color: #b45309;
        }
        html.dark .card-status-tag.checking {
            color: #fbbf24;
        }
        .card-status-tag.online {
            background: var(--accent-soft);
            color: var(--primary);
        }
        html.dark .card-status-tag.online {
            color: var(--primary);
        }
        .card-status-tag.slow {
            background: rgba(249, 115, 22, 0.15);
            color: #ea580c;
        }
        html.dark .card-status-tag.slow {
            color: #fb923c;
        }
        .card-status-tag.offline {
            background: rgba(239, 68, 68, 0.15);
            color: #dc2626;
        }
        html.dark .card-status-tag.offline {
            color: #f87171;
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script>
        (function () {
            // 主题白名单：扩展放行
            const __THEME_ALLOWED = /^(background|foreground|card|card-foreground|primary|primary-foreground|secondary|secondary-foreground|muted|muted-foreground|accent|accent-foreground|border|input|ring|ring-offset|radius|popover|popover-foreground|destructive|destructive-foreground|success|warning|sidebar|sidebar-foreground|sidebar-primary|sidebar-primary-foreground|sidebar-accent|sidebar-accent-foreground|sidebar-border|sidebar-ring|chart-1|chart-2|chart-3|chart-4|chart-5|shadow-color|font-sans|font-serif|font-mono|font-family)$/;
            // CSS 值消毒：白名单只放行颜色/长度/字体栈常用字符
            const __SAFE_CSS_VALUE = /^[a-zA-Z0-9#%.,()\/ '"_+-]{1,160}$/;
            function __safeCssValue(v) {
                const s = String(v == null ? '' : v).trim();
                return __SAFE_CSS_VALUE.test(s) ? s : '';
            }
            // 导入主题 JSON 消毒器
            const __THEME_KEY = /^[a-z0-9-]{1,40}$/i;
            function __sanitizeLayer(src, limit) {
                const out = {};
                let n = 0;
                if (!src || typeof src !== 'object' || Array.isArray(src)) return { layer: out, n: 0 };
                const keys = Object.keys(src); 
                for (let i = 0; i < keys.length && n < limit; i++) {
                    const k = keys[i];
                    if (!__THEME_KEY.test(k) || !__THEME_ALLOWED.test(k)) continue;
                    const v = src[k];
                    if (typeof v !== 'string') continue;
                    const sv = v.trim();
                    if (!sv || sv.length > 160) continue;
                    out[k] = sv;
                    n++;
                }
                return { layer: out, n: n };
            }
            window.__sanitizeThemeData = function (raw) {
                const empty = { data: null, validCount: 0, name: '' };
                if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return empty;
                // 兼容三种形态：{ data: {...} }、tweakcn 的 { name, cssVars: {...} }、裸 { light, dark, theme }
                let src = raw;
                if (raw.data && typeof raw.data === 'object' && !Array.isArray(raw.data)) src = raw.data;
                else if (raw.cssVars && typeof raw.cssVars === 'object' && !Array.isArray(raw.cssVars)) src = raw.cssVars;
                const data = {};
                let validCount = 0;
                const layers = ['light', 'dark', 'theme'];
                for (let i = 0; i < layers.length; i++) {
                    const r = __sanitizeLayer(src[layers[i]], 64);
                    if (r.n) data[layers[i]] = r.layer;
                    validCount += r.n;
                }
                const fonts = src.fonts;
                if (fonts && typeof fonts === 'object' && !Array.isArray(fonts)) {
                    const sans = fonts.sans || fonts.fontSans || fonts.fontFamily;
                    if (typeof sans === 'string' && sans.length <= 160) {
                        data.fonts = { sans: sans };
                        validCount++;
                    }
                }
                const name = typeof raw.name === 'string'
                    ? raw.name.split('').filter(function(ch){ var c = ch.charCodeAt(0); return c >= 32 && c !== 127; }).join('').trim().slice(0, 64)
                    : '';
                // 至少要有一种模式的有效色值，否则视为无效主题；仅有 theme 层时视为浅色/深色共用（与 fetchTheme 处理一致）
                if (!validCount) return { data: null, validCount: 0, name: name };
                if (!data.light && !data.dark) {
                    if (!data.theme) return { data: null, validCount: 0, name: name };
                    data.light = Object.assign({}, data.theme);
                    data.dark = Object.assign({}, data.theme);
                }
                return { data: data, validCount: validCount, name: name };
            };
            function __lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* 忽略 */ } }
            function __lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* 忽略 */ } }
            function __appendFontStylesheet(link, href) {
                link.rel = 'stylesheet';
                link.media = 'print';
                link.onload = function () { link.media = 'all'; link.onload = null; };
                link.onerror = function () { if (link.parentNode) link.parentNode.removeChild(link); };
                link.href = href;
                document.head.appendChild(link);
            }

            window.__loadGoogleFont = function (family) {
                if (family) {
                    try {
                        const name = family.split(',')[0].replace(/["']/g, '').trim();
                        if (name && /^[A-Za-z0-9 _-]+$/.test(name)) {
                            document.querySelectorAll('link[data-theme-font][data-family="' + name.replace(/"/g, '') + '"]').forEach(el => el.remove());
                            const link = document.createElement('link');
                            link.setAttribute('data-theme-font', '1');
                            link.setAttribute('data-family', name.replace(/"/g, ''));
                            __appendFontStylesheet(link, 'https://fonts.googleapis.com/css2?family=' + encodeURIComponent(name).replace(/%20/g, '+') + ':wght@400;500;600;700&display=swap');
                        }
                    } catch (e) { /* 加载失败忽略 */ }
                }
            };

            function __ensureCnFallback(stack) {
                if (!stack) return stack;
                // 中文兜底：windows上Noto(异步加载 500 档) ,macOS上PingFang
                let s = String(stack).replace(/[, ]*sans-serif$/i, '').trim();
                if (/Noto Sans SC/i.test(s)) return s + ', sans-serif';
                if (/Microsoft YaHei|Microsoft Yahei/i.test(s)) {
                    s = s.replace(/(,\s*)['"]?Microsoft Ya[Hh]ei['"]?/i, ", 'Noto Sans SC', 'Microsoft YaHei'");
                    return s + ', sans-serif';
                }
                return s + ", 'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', sans-serif";
            }
            // 应用外部主题变量
            window.__applyThemeVars = function (themeData, isDark) {
                document.querySelectorAll('[data-theme-var]').forEach(el => el.remove());
                if (!themeData) return;
                const layer = (isDark ? themeData.dark : themeData.light) || themeData.light || {};
                const set = Object.assign({}, layer);

                {
                    let fv = set['font-sans'] || set['fontSans'] || set['fontFamily'] || set['font'];
                    if (!fv && themeData.fonts) {
                        const fo = themeData.fonts;
                        fv = fo.sans || fo.fontSans || fo.fontFamily || fo.font;
                    }
                    if (fv) {
                        fv = __ensureCnFallback(fv);
                        set['font-sans'] = fv;
                        set['font-family'] = fv;

                        window.__loadGoogleFont(fv);
                    }
                }
                const parts = [];
                for (const [k, v] of Object.entries(set)) {
                    if (!__THEME_ALLOWED.test(k)) continue;
                    const sv = __safeCssValue(v);
                    if (!sv) continue; // 非法值直接丢弃，防止 CSS 注入
                    if (k === 'radius' && /^[, ]*0(px|rem)?[, ]*$/.test(sv)) continue;
                    parts.push('--' + k + ':' + sv);
                }
                // 应用私有变量
                const fg = __safeCssValue(set['foreground']) || 'var(--foreground)';
                const card = __safeCssValue(set['card']) || 'var(--card)';
                const primary = __safeCssValue(set['primary']) || 'var(--primary)';
                parts.push('--menu-hover:color-mix(in oklab,' + fg + ' 10%,' + card + ')');
                parts.push('--accent-soft:color-mix(in oklab,' + primary + ' 12%,' + card + ')');
                if (!parts.length) return;
                const style = document.createElement('style');
                style.setAttribute('data-theme-var', '1');
                style.textContent = ':root{' + parts.join(';') + '}';
                document.head.appendChild(style);
            };

            let _tdRaw, _tdObj, _tdHas = false;
            window.__getThemeData = function () {
                let raw;
                try { raw = localStorage.getItem('themeData'); } catch (e) { return null; }
                if (_tdHas && raw === _tdRaw) return _tdObj;
                _tdHas = true; _tdRaw = raw;
                try { _tdObj = JSON.parse(raw || 'null'); } catch (e) { _tdObj = null; }
                return _tdObj;
            };

            let isDark;
            const savePreferences = localStorage.getItem('savePreferences');
            if (savePreferences === 'true') {
                const savedTheme = localStorage.getItem('theme');
                isDark = savedTheme === 'dark';
            } else {

                isDark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
            }
            window.isDarkTheme = isDark;
            if (isDark) document.documentElement.classList.add('dark');

            window.__PUBLISHED_THEME = "__NAV_PUBLISHED_THEME__";
            try {
                var _pt = window.__PUBLISHED_THEME;
                if (typeof _pt === 'string') _pt = null; 
                var _local = window.__getThemeData();
                var _localUp = Number(localStorage.getItem('themeUpdatedAt') || 0);

                var _own = localStorage.getItem('themePersonal') === '1';

                var _keep = _own || (!!_local && _localUp > (_pt && _pt.updatedAt ? _pt.updatedAt : 0));
                if (_pt && _pt.updatedAt && !_keep) {
                    __lsSet('themePersonal', '0');
                    if (_pt.data) {
                        __lsSet('themeData', JSON.stringify(_pt.data));
                        if (_pt.name) __lsSet('themeName', _pt.name);
                        __lsSet('themeKind', _pt.kind || 'custom');
                        if (_pt.source) __lsSet('themeSource', _pt.source);
                        __lsSet('themeUpdatedAt', String(_pt.updatedAt));
                        _local = _pt.data;
                    } else {
                        __lsDel('themeData');
                        __lsDel('themeName');
                        __lsDel('themeKind');
                        __lsDel('themeSource');
                        __lsSet('themeUpdatedAt', String(_pt.updatedAt));
                        _local = null;
                    }
                }
                if (_local) window.__applyThemeVars(_local, isDark);
            } catch (e) {
                if (window.__getThemeData()) window.__applyThemeVars(window.__getThemeData(), isDark);
            }
            // 中文网页字体：当前字体栈引用 Noto Sans SC 时异步加载 500 单档（unicode-range 分片，按需下载）
            try {
                var _fs = getComputedStyle(document.documentElement).getPropertyValue('--font-sans') || '';
                if (/Noto Sans SC/i.test(_fs) && !document.querySelector('link[data-cn-font]')) {
                    var _cn = document.createElement('link');
                    _cn.setAttribute('data-cn-font', '1');
                    __appendFontStylesheet(_cn, 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@500&display=swap');
                }
            } catch (e) { /* 加载失败忽略 */ }
        })();
    </script>
</head>

<body class="min-h-screen font-sans text-base-foreground transition-colors duration-300">
    
    <!-- 背景层 -->
    <div class="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-base dark:bg-base">
        <!-- <div class="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-[var(--secondary)] dark:from-[var(--background)] dark:to-[var(--card)]"></div> -->
        <div class="absolute top-[-5%] left-[-10%] w-[800px] h-[800px] bg-[color-mix(in_oklab,color-mix(in_oklab,var(--primary)_45%,var(--background))_30%,transparent)] dark:bg-[color-mix(in_oklab,color-mix(in_oklab,var(--primary)_25%,var(--background))_30%,transparent)] rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/30 dark:bg-purple-600/20 rounded-full blur-[120px]"></div>
    </div>

    <!-- 顶部固定导航 -->
    <div class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_80%,transparent)] dark:bg-[color-mix(in_oklab,var(--background)_85%,transparent)] border-b border-[color-mix(in_oklab,var(--border)_40%,transparent)] dark:border-[color-mix(in_oklab,var(--border)_40%,transparent)] shadow-sm [transform:translateZ(0)]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 gap-4">
                    
                    <!-- Logo -->
                    <a class="flex items-center gap-2 flex-shrink-0 group cursor-pointer bg-[color-mix(in_oklab,var(--card)_45%,transparent)] dark:bg-transparent hover:bg-[color-mix(in_oklab,var(--card)_75%,transparent)] dark:hover:bg-card px-3 py-1.5 rounded-xl border border-[color-mix(in_oklab,var(--border)_50%,transparent)] dark:border-transparent transition-all duration-300 hover:shadow-md hover:-translate-y-0.5" href="/">
                        <div class="w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-accent to-teal-600 rounded-lg text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </div>
                        <span class="font-bold text-lg tracking-wide text-base-foreground hidden sm:block">我的导航</span>
                    </a>

                    <!-- Search Bar -->
                    <div class="flex-1 max-w-2xl mx-auto">
                        <div class="relative flex items-center w-full h-10 rounded-[var(--radius-xl)] focus-within:ring-2 focus-within:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus-within:shadow-lg focus-within:-translate-y-0.5 bg-card dark:bg-card border border-line dark:border-line-input shadow-sm hover:shadow-lg transition-all duration-300">
                            
                            <!-- Custom Search Engine Dropdown -->
                            <div class="relative h-full" id="search-engine-wrapper">
                                <button id="search-engine-btn" class="h-full pl-3 pr-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-accent hover:bg-muted dark:hover:bg-[color-mix(in_oklab,var(--muted)_60%,transparent)] rounded-l-[var(--radius-xl)] transition-colors outline-none w-auto md:min-w-[5.5rem]"><span class="sr-only">选择搜索引擎</span>
                                    <!-- 默认显示本站图标 -->
                                    <span id="current-engine-icon" class="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </span>
                                    <span id="current-engine-label" class="font-medium truncate hidden md:block">本站</span>
                                    <svg class="w-3 h-3 opacity-60 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                
                                <!-- Dropdown Menu -->
                                <div id="search-engine-menu" class="hidden absolute top-full left-0 mt-2 w-24 bg-card dark:bg-card rounded-[var(--radius-xl)] shadow-xl border border-line dark:border-line overflow-hidden z-50 dropdown-enter">
                                    <div class="py-1" id="search-engine-list">
                                        <div class="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">搜索引擎</div>
                                        <!-- JS 自动插入按钮 -->
                                    </div>
                                </div>
                            </div>

                            <div class="h-4 w-px bg-line-input dark:bg-line-input mx-1"></div>
                            
                            <input type="text" id="search-input" class="flex-1 bg-transparent border-none text-base-foreground dark:text-white text-sm focus:ring-0 placeholder:text-muted-foreground h-full w-full outline-none px-2" placeholder="搜索">
                            
                            <button id="clear-search-button" aria-label="清空搜索" class="hidden p-1.5 mr-1 rounded-full text-muted-foreground hover:text-red-500 hover:bg-muted dark:hover:bg-muted transition-all">
                                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                            </button>
                            
                            <button id="search-button" aria-label="搜索" class="h-full px-4 rounded-r-[var(--radius-xl)] text-muted-foreground hover:text-accent dark:hover:text-accent hover:bg-soft dark:hover:bg-[color-mix(in_oklab,var(--muted)_60%,transparent)] transition-colors border-l border-transparent dark:border-[color-mix(in_oklab,var(--border)_50%,transparent)] flex items-center justify-center">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Profile / Settings -->
                    <div class="relative flex items-center gap-2">
                        <div id="profile-dropdown-wrapper" class="relative">
                            <button id="profile-menu-toggle" aria-label="设置菜单" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-muted-foreground hover:bg-[color-mix(in_oklab,var(--card)_75%,transparent)] dark:hover:bg-muted transition-all text-sm font-medium border border-transparent hover:border-line dark:hover:border-line hover:shadow-sm">
                                <div class="w-7 h-7 rounded-full bg-muted dark:bg-muted flex items-center justify-center shadow-inner">
                                     <svg class="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <span id="menu-toggle" class="hidden md:inline">设置</span>
                            </button>
                            
                            <!-- Dropdown Menu -->
                            <div id="profile-dropdown" class="hidden absolute right-0 mt-2 w-60 bg-card rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform origin-top-right transition-all z-50 dropdown-enter">
                                <div class="p-2 space-y-1">
                                    <!-- Edit Mode -->
                                    <button id="edit-mode-btn" onclick="toggleEditMode()" class="w-full text-left px-3 py-2.5 rounded-lg text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-3 font-medium">
                                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                        编辑模式
                                    </button>

                                    <!-- 导入导出 (仅登录显示) -->
                                    <div id="data-tools-menu" class="hidden">
                                         <div class="h-px bg-muted dark:bg-[color-mix(in_oklab,var(--muted)_50%,transparent)] mx-1 my-1"></div>
                                         <button onclick="exportData()" class="w-full text-left px-3 py-2 rounded-lg text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-3">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                            导出配置
                                        </button>
                                        <button onclick="importData()" class="w-full text-left px-3 py-2 rounded-lg text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-3">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"></path></svg>
                                            导入配置
                                        </button>
                                        <!-- 文件输入框 (隐藏) -->
                                        <input type="file" id="import-file-input" accept=".json,.html,.htm" class="hidden">
                                    </div>
                                    
                                    <div class="h-px bg-muted dark:bg-[color-mix(in_oklab,var(--muted)_50%,transparent)] mx-1 my-1"></div>

                                    <!-- 主题皮肤入口：访客也可用，仅本地生效；管理员的改动才同步 KV -->
                                    <button id="theme-menu-btn" onclick="openThemeDialog()" class="flex w-full text-left px-3 py-2 rounded-lg text-sm text-muted-foreground dark:text-muted-foreground hover:bg-[var(--menu-hover)] hover:text-accent dark:hover:text-accent transition-colors items-center gap-3">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm8 9a1 1 0 0 1-1 1h-.5a1 1 0 0 1 0-2H19a1 1 0 0 1 1 1zM5 12a1 1 0 0 1-1 1h-.5a1 1 0 0 1 0-2H4a1 1 0 0 1 1 1z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M12 2v2M12 20v2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>
                                        主题皮肤
                                        <svg class="w-3.5 h-3.5 ml-auto text-muted-foreground" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                                    </button>

                                    <!-- 紧凑模式（卡片） -->
                                    <div class="px-3 py-2.5 flex items-center justify-between text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] rounded-lg group">
                                        <span class="flex items-center gap-3">
                                            <svg class="w-4 h-4 text-muted-foreground group-hover:text-muted-foreground dark:text-muted-foreground dark:group-hover:text-base-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                                            </svg>
                                            紧凑模式
                                        </span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="compact-switch-checkbox" onchange="toggleCompactMode()" class="sr-only peer">
                                            <div class="w-9 h-5 bg-[color-mix(in_oklab,var(--foreground)_35%,var(--card))] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] peer-checked:bg-accent"></div>
                                        </label>
                                    </div>
                                    
                                    <!-- 【新增】APP 布局切换 -->
                                    <div class="px-3 py-2.5 flex items-center justify-between text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] rounded-lg group">
                                        <span class="flex items-center gap-3">
                                            <svg class="w-4 h-4 text-muted-foreground group-hover:text-muted-foreground dark:text-muted-foreground dark:group-hover:text-base-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                                            </svg>
                                            APP 视图
                                        </span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="layout-switch-checkbox" onchange="toggleAppLayout()" class="sr-only peer">
                                            <div class="w-9 h-5 bg-[color-mix(in_oklab,var(--foreground)_35%,var(--card))] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] peer-checked:bg-accent"></div>
                                        </label>
                                    </div>

                                    <!-- 一键检测 + 刷新图标 -->
                                    <div id="check-all-menu" class="hidden border-t border-line dark:border-line-input my-1">
                                        <button id="check-all-btn" onclick="checkAllSites()" class="w-full text-left px-3 py-2.5 rounded-lg text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] hover:text-accent dark:hover:text-accent transition-colors flex items-center justify-between gap-3 font-medium">
                                            <span class="flex items-center gap-3">
                                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                一键检测
                                            </span>
                                            <span id="check-all-status" class="text-xs font-normal text-muted-foreground dark:text-muted-foreground"></span>
                                        </button>
                                    </div>
                                    <button id="refresh-icons-btn" onclick="refreshAllIcons()" class="w-full text-left px-3 py-2.5 rounded-lg text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] hover:text-accent dark:hover:text-accent transition-colors flex items-center gap-3 font-medium">
                                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                                        刷新所有网站图标
                                    </button>
                                    
                                    <div class="px-3 py-2.5 flex items-center justify-between text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] rounded-lg group">
                                        <span class="flex items-center gap-3">
                                            <svg class="w-4 h-4 text-muted-foreground group-hover:text-muted-foreground dark:text-muted-foreground dark:group-hover:text-base-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                            深色模式
                                        </span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="theme-switch-checkbox" class="sr-only peer">
                                            <div class="w-9 h-5 bg-[color-mix(in_oklab,var(--foreground)_35%,var(--card))] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] peer-checked:bg-accent"></div>
                                        </label>
                                    </div>
                                    <div class="px-3 py-2.5 flex items-center justify-between text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] rounded-lg group">
                                        <span class="flex items-center gap-3">
                                            <svg class="w-4 h-4 text-muted-foreground group-hover:text-muted-foreground dark:text-muted-foreground dark:group-hover:text-base-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                            记住设置
                                        </span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" id="save-preference-checkbox" class="sr-only peer">
                                            <div class="w-9 h-5 bg-[color-mix(in_oklab,var(--foreground)_35%,var(--card))] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] peer-checked:bg-accent"></div>
                                        </label>
                                    </div>
                                    <div class="h-px bg-muted dark:bg-[color-mix(in_oklab,var(--muted)_50%,transparent)] mx-1 my-1"></div>
                                    <button id="login-Btn" onclick="toggleLogin()" class="w-full text-left px-3 py-2.5 rounded-lg text-sm text-base-foreground dark:text-base-foreground hover:bg-[var(--menu-hover)] hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center gap-3 font-medium">
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
            <button onclick="addCategory()" class="w-full py-4 rounded-[var(--radius-2xl)] border-2 border-dashed border-line dark:border-line text-muted-foreground hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent hover:bg-[color-mix(in_oklab,var(--accent)_50%,transparent)] dark:hover:bg-[color-mix(in_oklab,var(--secondary)_50%,transparent)] transition-all flex items-center justify-center gap-2 group">
                <div class="w-8 h-8 rounded-full bg-muted dark:bg-muted group-hover:bg-soft dark:group-hover:bg-soft flex items-center justify-center transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                </div>
                <span class="font-medium text-lg">新建分类</span>
            </button>
        </div>

        <!-- 内容渲染容器 -->
        <div id="sections-container" class="space-y-10"></div>

        <!-- 返回顶部按钮独立放置 -->
        <div class="fixed bottom-8 right-8 z-50">
            <button id="back-to-top-btn" onclick="scrollToTop()" aria-label="返回顶部" class="hidden w-12 h-12 rounded-2xl bg-[color-mix(in_oklab,var(--card)_90%,var(--background))] dark:bg-[color-mix(in_oklab,var(--card)_90%,var(--background))] text-muted-foreground border border-line dark:border-line shadow-lg backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 hover:bg-muted dark:hover:bg-muted has-tooltip group" data-tooltip="返回顶部">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
        </div>
        
    </main>

    <!-- 模态框：添加/编辑链接 -->
    <div id="dialog-overlay" class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="dialog-box" class="bg-card rounded-[var(--radius-2xl)] shadow-2xl w-full max-w-md p-6 transform transition-all duration-300 border border-line dark:border-line dialog-scale-hidden">
            <h3 class="text-xl font-bold mb-5 text-base-foreground flex items-center gap-2">
                <span class="w-1 h-6 bg-accent rounded-full"></span>
                编辑信息
            </h3>
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">名称 <span class="text-red-500">*</span></label>
                    <input type="text" id="name-input" class="w-full px-4 py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:border-accent outline-none transition-all dark:text-white" placeholder="网站名称">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">地址 <span class="text-red-500">*</span></label>
                    <input type="text" id="url-input" class="w-full px-4 py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:border-accent outline-none transition-all dark:text-white" placeholder="https://...">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">描述</label>
                    <input type="text" id="tips-input" class="w-full px-4 py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:border-accent outline-none transition-all dark:text-white" placeholder="简短的描述...">
                </div>
                <div>
                    <label class="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">图标 URL</label>
                    <input type="text" id="icon-input" class="w-full px-4 py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] focus:border-accent outline-none transition-all dark:text-white" placeholder="留空自动获取">
                </div>
                
                <!-- Custom Category Dropdown -->
                <div class="relative z-20" id="category-select-wrapper">
                    <label class="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">分类</label>
                    <input type="hidden" id="category-select-value">
                    <button id="category-select-btn" class="w-full px-4 py-2.5 text-left rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] outline-none transition-all text-base-foreground dark:text-white flex items-center justify-between">
                        <span id="category-select-text">请选择分类</span>
                        <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown List -->
                    <div id="category-select-menu" class="hidden absolute top-full left-0 mt-2 w-full max-h-48 overflow-y-auto bg-card dark:bg-card rounded-xl shadow-xl border border-line dark:border-line z-50 custom-scrollbar">
                        <!-- Items populated by JS -->
                    </div>
                </div>

                <div class="flex items-center gap-3 pt-2">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="private-checkbox" class="sr-only peer">
                        <div class="w-9 h-5 bg-[color-mix(in_oklab,var(--foreground)_35%,var(--card))] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-[color-mix(in_oklab,var(--muted-foreground)_40%,var(--card))] peer-checked:bg-accent"></div>
                    </label>
                    <label for="private-checkbox" class="text-sm text-muted-foreground font-medium cursor-pointer select-none">设为私密链接 (仅登录可见)</label>
                </div>
            </div>
            <div class="flex justify-end gap-3 mt-8">
                <button id="dialog-cancel-btn" class="px-5 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium text-muted-foreground hover:bg-muted dark:text-muted-foreground dark:hover:bg-muted transition-colors">取消</button>
                <button id="dialog-confirm-btn" class="px-5 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium text-accent-foreground bg-accent hover:bg-accent shadow-lg transition-all hover:translate-y-[-1px]">确定</button>
            </div>
        </div>
    </div>

    <!-- 密码弹窗 -->
    <div id="password-dialog-overlay" class="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="password-dialog-box" class="bg-card rounded-[var(--radius-2xl)] shadow-2xl p-8 w-full max-w-sm border border-line dark:border-line text-center transform transition-all duration-300 dialog-scale-hidden">
            <div class="w-16 h-16 bg-soft dark:bg-soft rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-2 text-base-foreground">身份验证</h3>
            <p class="text-sm text-muted-foreground mb-6">请输入管理员密码以继续操作</p>
            <input type="password" id="password-input" placeholder="访问密码" class="w-full px-4 py-3 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-ring focus:border-transparent outline-none mb-4 dark:text-white text-center tracking-widest text-lg transition-all">
            <input type="text" id="totp-input" placeholder="6位动态验证码（若已启用双因素）" inputmode="numeric" autocomplete="one-time-code" maxlength="6" class="w-full px-4 py-3 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-ring focus:border-transparent outline-none mb-6 dark:text-white text-center tracking-widest text-lg transition-all">
            <div class="flex gap-3">
                <button id="password-cancel-btn" class="flex-1 py-2.5 rounded-[var(--radius-xl)] text-muted-foreground bg-muted hover:bg-secondary dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted font-medium transition-colors">取消</button>
                <button id="password-confirm-btn" class="flex-1 py-2.5 rounded-[var(--radius-xl)] text-accent-foreground bg-accent hover:bg-accent shadow-lg font-medium transition-colors">确认登录</button>
            </div>
        </div>
    </div>

    <!-- 自定义 Alert -->
    <div id="custom-alert-overlay" class="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="custom-alert-box" class="bg-card rounded-[var(--radius-2xl)] shadow-2xl p-6 max-w-sm w-full border border-line dark:border-line transform transition-all duration-300 dialog-scale-hidden">
            <h3 id="custom-alert-title" class="text-lg font-bold mb-2 text-base-foreground">提示</h3>
            <p id="custom-alert-content" class="text-muted-foreground mb-6 text-sm leading-relaxed"></p>
            <div class="flex justify-end">
                <button id="custom-alert-confirm" class="px-5 py-2 bg-accent hover:bg-accent text-accent-foreground rounded-[var(--radius-xl)] text-sm font-medium transition-colors shadow-lg">我知道了</button>
            </div>
        </div>
    </div>

    <!-- 自定义 Confirm -->
    <div id="custom-confirm-overlay" class="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="custom-confirm-box" class="bg-card rounded-[var(--radius-2xl)] shadow-2xl p-6 max-w-sm w-full border border-line dark:border-line transform transition-all duration-300 dialog-scale-hidden">
            <h3 class="text-lg font-bold mb-3 text-base-foreground">确认操作</h3>
            <p id="custom-confirm-message" class="text-muted-foreground mb-6 text-sm"></p>
            <div class="flex justify-end gap-3">
                <button id="custom-confirm-cancel" class="px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-[var(--radius-xl)] dark:text-muted-foreground dark:hover:bg-muted transition-colors font-medium">取消</button>
                <button id="custom-confirm-ok" class="px-4 py-2 text-sm text-accent-foreground bg-accent hover:bg-accent rounded-[var(--radius-xl)] shadow-lg transition-colors font-medium">确定</button>
            </div>
        </div>
    </div>

    <!-- 分类输入弹窗 -->
    <div id="category-dialog" class="fixed inset-0 z-[65] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="category-dialog-box" class="bg-card rounded-[var(--radius-2xl)] p-6 w-full max-w-sm shadow-2xl border border-line dark:border-line transform transition-all duration-300 dialog-scale-hidden">
            <h3 id="category-dialog-title" class="text-lg font-bold mb-4 text-base-foreground">分类名称</h3>
            <input type="text" id="category-name-input" class="w-full px-4 py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line dark:border-line-input focus:ring-2 focus:ring-ring outline-none mb-6 dark:text-white transition-all" placeholder="输入分类名称">
            <div class="flex justify-end gap-3">
                <button id="category-cancel-btn" class="px-4 py-2 text-sm rounded-[var(--radius-xl)] text-muted-foreground bg-muted hover:bg-secondary dark:bg-muted dark:text-muted-foreground font-medium">取消</button>
                <button id="category-confirm-btn" class="px-4 py-2 text-sm rounded-[var(--radius-xl)] text-accent-foreground bg-accent hover:bg-accent shadow-md font-medium">确定</button>
            </div>
        </div>
    </div>

    <!-- 主题设置弹窗 -->
    <div id="theme-dialog-overlay" class="fixed inset-0 z-[90] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="theme-dialog-box" class="bg-card dark:bg-card rounded-[var(--radius-2xl)] shadow-2xl w-full max-w-2xl h-[92vh] max-h-[760px] flex flex-col border border-line transition-all duration-300 transform">
            <!-- 头部：标题 + 关闭 -->
            <div class="px-5 py-3.5 flex items-center justify-between border-b border-[color-mix(in_oklab,var(--border)_40%,transparent)] shrink-0">
                <h3 class="text-lg font-bold text-base-foreground flex items-center gap-2">
                    <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm8 9a1 1 0 0 1-1 1h-.5a1 1 0 0 1 0-2H19a1 1 0 0 1 1 1zM5 12a1 1 0 0 1-1 1h-.5a1 1 0 0 1 0-2H4a1 1 0 0 1 1 1z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>
                    主题皮肤
                </h3>
                <button id="theme-dialog-close" onclick="closeThemeDialog()" aria-label="关闭"
                    class="p-2 rounded-full text-muted-foreground hover:bg-muted dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>

            <div class="flex-1 min-h-0 flex flex-col overflow-hidden p-5 pt-3">
                <div id="theme-status-bar" class="mb-3 shrink-0"></div>

                <div class="mb-2 flex items-center justify-between shrink-0">
                    <h4 class="text-sm font-semibold text-base-foreground">推荐主题</h4>
                    <span id="theme-kind-toggle" class="text-xs text-muted-foreground"></span>
                </div>
                <p id="theme-guide" class="text-xs text-muted-foreground mb-2 shrink-0"></p>
                <div id="theme-grid" class="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1 min-h-0 overflow-y-auto px-1 py-1 no-scrollbar content-start"></div>

                <div id="theme-custom-details" class="mt-4 shrink-0 border border-[color-mix(in_oklab,var(--border)_40%,transparent)] rounded-[var(--radius-xl)]">
                    <div class="px-4 py-2.5 text-sm font-medium text-base-foreground">
                        tweakcn 主题
                    </div>
                    <div class="px-4 pb-4">
                        <div class="relative mb-2">
                            <input type="text" id="theme-input" placeholder="粘贴主题ID 或完整链接 themes/xxx"
                                class="w-full min-w-0 pl-4 pr-[72px] py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line-input focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] outline-none transition-all text-base-foreground dark:text-white">
                            <button onclick="applyCustomTheme()" class="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-[var(--radius-lg)] text-sm font-medium text-accent-foreground bg-accent hover:bg-accent shadow-lg transition-all">应用</button>
                        </div>
                        <p id="theme-status" class="hidden text-xs mb-2 text-muted-foreground" style="color: var(--muted-foreground);"></p>
                        <a href="https://tweakcn.com/community" target="_blank" rel="noopener" class="text-xs text-accent hover:underline inline-flex items-center gap-1">更多主题：tweakcn.com/community ↗</a>
                    </div>
                </div>

                <!-- 导入 / 导出主题（点击后弹出子弹窗） -->
                <div id="theme-json-details" class="mt-4 shrink-0 border border-[color-mix(in_oklab,var(--border)_40%,transparent)] rounded-[var(--radius-xl)]">
                    <div class="px-4 py-2.5 text-sm font-medium text-base-foreground">
                        导入 / 导出主题
                    </div>
                    <div class="px-4 pb-4">
                        <div class="flex flex-wrap gap-2 mb-2">
                            <button onclick="openThemeExportDialog()" class="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium border border-line text-base-foreground hover:bg-secondary dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-all">
                                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
                                导出主题
                            </button>
                            <button onclick="openThemeImportDialog()" class="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium border border-line text-base-foreground hover:bg-secondary dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-all">
                                <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15V3m0 0L8 7m4-4l4 4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
                                导入主题
                            </button>
                        </div>
                        <p id="theme-json-entry-status" class="hidden mt-2 text-xs"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 子弹窗：导出主题 -->
    <div id="theme-export-overlay" class="fixed inset-0 z-[95] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="theme-export-box" class="bg-card dark:bg-card rounded-[var(--radius-2xl)] p-6 w-full max-w-md shadow-2xl border border-line dark:border-line transform transition-all duration-300 dialog-scale-hidden">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-base font-bold text-base-foreground">导出主题</h3>
                <button onclick="closeThemeExportDialog()" aria-label="关闭" class="p-1.5 rounded-full text-muted-foreground hover:bg-muted dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <textarea id="theme-export-text" rows="8" readonly spellcheck="false"
                class="w-full px-4 py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line-input text-xs font-mono leading-relaxed text-base-foreground dark:text-white resize-y mb-3"></textarea>
            <p id="theme-export-status" class="hidden text-xs mb-2"></p>
            <div class="flex gap-2">
                <button onclick="copyThemeJson()" class="flex-1 px-4 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium border border-line text-base-foreground hover:bg-secondary dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-colors">复制 JSON</button>
                <button onclick="downloadThemeJson()" class="flex-1 px-4 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium text-accent-foreground bg-accent hover:bg-accent transition-all">下载文件</button>
            </div>
        </div>
    </div>

    <!-- 子弹窗：导入主题 JSON -->
    <div id="theme-import-overlay" class="fixed inset-0 z-[95] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300 overlay-hidden hidden">
        <div id="theme-import-box" class="bg-card dark:bg-card rounded-[var(--radius-2xl)] p-6 w-full max-w-md shadow-2xl border border-line dark:border-line transform transition-all duration-300 dialog-scale-hidden">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-base font-bold text-base-foreground">导入主题</h3>
                <button onclick="closeThemeImportDialog()" aria-label="关闭" class="p-1.5 rounded-full text-muted-foreground hover:bg-muted dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <textarea id="theme-import-text" rows="8" spellcheck="false" placeholder="粘贴主题 JSON 数据，或点击下方「选择文件」"
                class="w-full px-4 py-2.5 rounded-[var(--radius-xl)] bg-muted dark:bg-muted border border-line-input focus:ring-2 focus:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)] outline-none transition-all text-xs font-mono leading-relaxed text-base-foreground dark:text-white resize-y mb-1"></textarea>
            <p class="text-xs text-muted-foreground mb-2">导入将覆盖当前主题，应用后可点「回退上一套」撤销。</p>
            <p id="theme-import-status" class="hidden text-xs mb-2"></p>
            <div class="flex gap-2">
                <button onclick="pickThemeFile()" class="flex-1 px-4 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium border border-line text-base-foreground hover:bg-secondary dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-colors">选择文件</button>
                <button id="theme-import-apply-btn" onclick="applyThemeJsonFlow()" class="flex-1 px-4 py-2.5 rounded-[var(--radius-xl)] text-sm font-medium text-accent-foreground bg-accent hover:bg-accent transition-all">应用</button>
            </div>
            <input type="file" id="theme-import-file" accept=".json,application/json" class="hidden">
        </div>
    </div>

    <div id="loading-mask" class="fixed inset-0 z-30 hidden flex flex-col items-center justify-center transition-opacity">
        <div class="relative w-16 h-16">
            <div class="absolute inset-0 w-full h-full rounded-full loading-spinner-track"></div>
            <div class="absolute inset-0 w-full h-full rounded-full loading-spinner-arc animate-spin"></div>
        </div>
        <p class="mt-4 text-accent font-medium animate-pulse tracking-wide">加载中...</p>
    </div>

    <!-- Tooltip Container -->
    <div id="custom-tooltip" class="fixed hidden pointer-events-none max-w-xs whitespace-pre-wrap border leading-relaxed tracking-wide backdrop-blur-sm rounded-xl shadow-glass px-4 py-2 text-sm transition-opacity duration-150
        bg-card dark:bg-card text-base-foreground dark:text-base-foreground border-[color-mix(in_oklab,var(--border)_50%,transparent)] dark:border-[color-mix(in_oklab,var(--border)_50%,transparent)]">
    </div>

    <script>
    window.addEventListener('beforeunload', (e) => { e.preventDefault(); e.returnValue = ''; });
    window.onbeforeunload = function() { return ''; };

    let isEditMode = false;
    let isLoggedIn = false;
    let isAppLayout = localStorage.getItem('appLayout') === 'true';
    let isCompact = localStorage.getItem('compactMode') === 'true';

    let editCardMode = false;
    let isEditCategoryMode = false;
    
    const categories = {};
    let currentEngine;
    let initialDragState = { category: null, index: -1 };

    let latencyResults = {};
    let checkAllRunning = false;

    function siteKey(url) {
        return String(url || '')
            .replace(/^[a-z]+:\\/\\//i, '')
            .replace(/\\/+$/, '')
            .toLowerCase();
    }

    function findCardsByUrl(rawUrl) {
        const out = [];
        document.querySelectorAll('[data-url]').forEach((c) => {
            if (c.getAttribute('data-url') === rawUrl) out.push(c);
        });
        return out;
    }

    function renderStatus(card, state) {
        const tag = card.querySelector('.card-status-tag');
        if (!tag) return;
        tag.classList.remove('checking', 'online', 'slow', 'offline');
        if (state === 'checking') {
            tag.classList.add('checking', 'visible');
            tag.textContent = '检测中...';
            tag.title = '';
        } else if (state && state.online) {
            const latency = Number(state.latency) || 0;
            const isLocal = state.source === 'local';
            if (!isLocal && latency > 1000) {
                tag.classList.add('offline', 'visible');
            } else if (latency > 300) {
                tag.classList.add('slow', 'visible');
            } else {
                tag.classList.add('online', 'visible');
            }
            tag.textContent = latency + 'ms';
            tag.title = state.status != null ? ('HTTP ' + state.status + '，耗时 ' + latency + 'ms') : ('在线 ' + latency + 'ms');
        } else {
            tag.classList.add('offline', 'visible');
            tag.textContent = '离线';
            tag.title = state && state.status != null ? ('HTTP ' + state.status) : '离线或超时';
        }
    }

    async function localProbe(url) {
        const start = Date.now();
        const TIMEOUT = 3000;
        return new Promise((resolve) => {
            let settled = false;
            let overallTimer = null;
            let img = null;
            const controller = new AbortController();

            const finish = (result) => {
                if (settled) return;
                settled = true;
                if (overallTimer) { clearTimeout(overallTimer); overallTimer = null; }
                try { controller.abort(); } catch (_) {}
                if (img) {
                    img.onload = null;
                    img.onerror = null;
                    img.src = '';
                    img = null;
                }
                resolve(Object.assign({ latency: Date.now() - start }, result));
            };

            overallTimer = setTimeout(
                () => finish({ online: false, status: 'error', source: 'local' }),
                TIMEOUT + 200
            );

            fetch(url, {
                mode: 'no-cors',
                redirect: 'follow',
                cache: 'no-store',
                signal: controller.signal
            }).then(() => finish({ online: true, status: 200, source: 'local' }))
              .catch(() => {});

            try {
                img = new Image();
                img.onload = () => finish({ online: true, status: 200, source: 'local' });
                img.onerror = () => {};
                const cleanUrl = new URL(url).origin;
                img.src = cleanUrl + '/favicon.ico?_t=' + Date.now();
            } catch (e) {
                img = null;
            }
        });
    }

    // 一键检测：最大并发 5 的队列，检测全部站点
    async function checkAllSites() {
        if (!isLoggedIn) { alert('请先登录后再使用检测功能'); return; }
        if (checkAllRunning) return;
        if (!await customConfirm('确定要检测全部站点的存活与延迟吗？')) return;
        checkAllRunning = true;

        const statusEl = document.getElementById('check-all-status');
        if (statusEl) statusEl.textContent = '检测中...';

        const links = getAllLinks().filter((l) => l && l.url);
        const total = links.length;

        if (total === 0) {
            checkAllRunning = false;
            if (statusEl) statusEl.textContent = '0 个站点';
            return;
        }

        const allCards = document.querySelectorAll('[data-url]');
        allCards.forEach((c) => renderStatus(c, 'checking'));

        links.forEach((l) => { latencyResults[siteKey(l.url)] = 'checking'; });

        const queue = links.slice();
        let doneCount = 0;

        let lastProgressUpdate = 0;
        function updateProgress() {
            if (!statusEl) return;
            const now = Date.now();
            if (now - lastProgressUpdate > 100 || doneCount === total) {
                statusEl.textContent = doneCount + '/' + total;
                lastProgressUpdate = now;
            }
        }

        async function worker() {
            while (queue.length > 0) {
                const link = queue.shift();
                if (!link) continue;             
                const key = siteKey(link.url);                
                const cards = findCardsByUrl(link.url);
                const result = await localProbe(link.url);              
                latencyResults[key] = result;               
                if (cards.length > 0) {
                    cards.forEach((c) => renderStatus(c, result));
                }                
                doneCount++;
                updateProgress(); 
            }
        }

        const tasks = [];
        const concurrency = Math.min(5, queue.length);
        for (let i = 0; i < concurrency; i++) {
            tasks.push(worker());
        }
        
        await Promise.all(tasks);

        checkAllRunning = false;
        if (statusEl) statusEl.textContent = '';
    }

    function toggleAppLayout() {
        isAppLayout = !isAppLayout;
        localStorage.setItem('appLayout', isAppLayout);
        
        const checkbox = document.getElementById('layout-switch-checkbox');
        if (checkbox) checkbox.checked = isAppLayout;

        loadSections();
    }

    // 紧凑模式在浏览态与编辑态均生效
    function isCompactActive() {
        return isCompact;
    }

    function toggleCompactMode() {
        isCompact = !isCompact;
        localStorage.setItem('compactMode', isCompact);

        const checkbox = document.getElementById('compact-switch-checkbox');
        if (checkbox) checkbox.checked = isCompact;

        document.body.classList.toggle('compact-mode', isCompactActive());
        loadSections();
    }

    function refreshAllIcons() {
        const imgs = Array.prototype.slice.call(document.querySelectorAll('[data-url] img[src*="/api/icon"]'));
        if (imgs.length === 0) { alert('没有可刷新的默认图标（自定义图标不会刷新）'); return; }

        const stamp = Date.now();
        imgs.forEach((img) => {
            try {
                const u = new URL(img.getAttribute('src'), location.origin);
                u.searchParams.set('v', stamp);
                img.classList.remove('opacity-100');
                img.classList.add('opacity-0');
                img.onload = function() {
                    this.classList.add('opacity-100');
                    this.classList.remove('opacity-0');
                };
                img.onerror = function() { this.classList.add('opacity-100'); this.classList.remove('opacity-0'); };
                img.src = u.toString();
            } catch (e) {}
        });
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
            btn.className = "w-full text-left px-3 py-2.5 text-sm text-base-foreground dark:text-base-foreground hover:bg-soft dark:hover:bg-muted hover:text-accent transition-colors flex items-center gap-3";
            btn.onclick = () => selectSearchEngine(key, label);
            
            btn.innerHTML = \`\${icon}<span>\${label}</span>\`;
            
            container.appendChild(btn);
        });
    }

    function setActiveEngine(engine) {
        if (!searchEngines.hasOwnProperty(engine) && engine !== 'site') engine = 'site';
        selectSearchEngine(engine, searchEngineLabels[engine]);
    }

    function updateSearchEngineUI(value) {
        const label = searchEngineLabels[value] || "本站";
        const icon = searchEngineIcons[value] || searchEngineIcons['site'];
        
        document.getElementById('current-engine-label').textContent = label;
        document.getElementById('current-engine-icon').innerHTML = icon;
    }

    document.addEventListener('DOMContentLoaded', async () => {
        const loadingMask = document.getElementById('loading-mask');
        if (loadingMask) loadingMask.classList.remove('hidden');
        document.body.classList.toggle('compact-mode', isCompactActive());
        initializeUIComponents();
        renderSearchEngineMenu();
        await checkLoginStatusAndLoad();
        if (loadingMask) loadingMask.classList.add('hidden');
        document.addEventListener('visibilitychange', async () => {
            if (document.visibilityState === 'visible' && isLoggedIn) {
                await validateToken();
                pullThemeFromKv(); 
            }
        });
    });

    async function checkLoginStatusAndLoad() {
        const isValid = await validateToken();
        if (isValid) {
            isLoggedIn = true;
        } else {
            isLoggedIn = false;
            isEditMode = false;
        }
        await loadLinks(true);
        pullThemeFromKv();
    }

    function initializeUIComponents() {
        const elements = {
            themeSwitchCheckbox: document.getElementById('theme-switch-checkbox'),
            layoutSwitchCheckbox: document.getElementById('layout-switch-checkbox'),
            compactSwitchCheckbox: document.getElementById('compact-switch-checkbox'),
            savePrefCheckbox: document.getElementById('save-preference-checkbox'),
            searchButton: document.getElementById('search-button'),
            searchInput: document.getElementById('search-input'),
            clearSearchButton: document.getElementById('clear-search-button'),
            menuToggleBtn: document.getElementById('profile-menu-toggle'),
            dropdown: document.getElementById('profile-dropdown'),
            dropdownWrapper: document.getElementById('profile-dropdown-wrapper'),
            backToTopBtn: document.getElementById('back-to-top-btn')
        };
        
        elements.themeSwitchCheckbox.checked = document.documentElement.classList.contains('dark');
        elements.themeSwitchCheckbox.addEventListener('change', (e) => {
            const isDark = e.target.checked;
            window.isDarkTheme = isDark;
            applyTheme(isDark);
            
            const savePrefCheckbox = document.getElementById('save-preference-checkbox');
            if (savePrefCheckbox && savePrefCheckbox.checked) {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            }
        });

        if(elements.layoutSwitchCheckbox) {
            elements.layoutSwitchCheckbox.checked = isAppLayout;
        }

        if(elements.compactSwitchCheckbox) {
            elements.compactSwitchCheckbox.checked = isCompact;
        }
        
        const savedPref = localStorage.getItem('savePreferences') === 'true';
        elements.savePrefCheckbox.checked = savedPref;

        if (window.matchMedia) {
            const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
            const onSystemDarkChange = (e) => {
                if (localStorage.getItem('savePreferences') === 'true') return;
                window.isDarkTheme = e.matches;
                applyTheme(e.matches);
            };
            if (darkMedia.addEventListener) darkMedia.addEventListener('change', onSystemDarkChange);
            else if (darkMedia.addListener) darkMedia.addListener(onSystemDarkChange); // 旧浏览器兼容
        }

        currentEngine = (savedPref && localStorage.getItem('searchEngine')) || 'site';
        updateSearchEngineUI(currentEngine);

        const searchWrapper = document.getElementById('search-engine-wrapper');
        const searchBtn = document.getElementById('search-engine-btn');
        const searchMenu = document.getElementById('search-engine-menu');
        
        searchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            searchMenu.classList.toggle('hidden');
        });

        const catWrapper = document.getElementById('category-select-wrapper');
        const catBtn = document.getElementById('category-select-btn');
        const catMenu = document.getElementById('category-select-menu');
        
        catBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            catMenu.classList.toggle('hidden');
        });

        const toggleDropdown = () => {
            elements.dropdown.classList.toggle('hidden');
        };

        elements.menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown();
        });

        document.addEventListener('click', (e) => {
            if (!elements.dropdownWrapper.contains(e.target)) {
                 elements.dropdown.classList.add('hidden');
            }
            if (!searchWrapper.contains(e.target)) {
                searchMenu.classList.add('hidden');
            }
            if (!catWrapper.contains(e.target)) {
                catMenu.classList.add('hidden');
            }
        });

        elements.dropdown.addEventListener('click', (e) => { e.stopPropagation(); });

        elements.savePrefCheckbox.addEventListener('change', () => {
            const enabled = elements.savePrefCheckbox.checked;
            localStorage.setItem('savePreferences', enabled);
            if (!enabled) {
                localStorage.removeItem('searchEngine');
                localStorage.removeItem('theme');
            } else {
                localStorage.setItem('searchEngine', currentEngine);
                localStorage.setItem('theme', window.isDarkTheme ? 'dark' : 'light');
            }
        });

        elements.searchButton.addEventListener('click', async () => {
            const query = elements.searchInput.value.trim();
            if (query) {
                if (currentEngine === 'site') {
                    await searchLinks(query); 
                } else {
                    window.open(searchEngines[currentEngine] + encodeURIComponent(query), '_blank');
                }
            }
        });

        if (elements.clearSearchButton) {
            elements.clearSearchButton.addEventListener('click', () => {
                elements.searchInput.value = '';
                loadSections(); 
            });
        }

        if (elements.searchInput) {
            elements.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') elements.searchButton.click();
            });
            let searchDebounceTimer = null;
            elements.searchInput.addEventListener('input', (e) => {
                if (e.target.value) {
                    elements.clearSearchButton.classList.remove('hidden');
                } else {
                    elements.clearSearchButton.classList.add('hidden');
                }
                clearTimeout(searchDebounceTimer);
                searchDebounceTimer = setTimeout(() => {
                    const q = e.target.value.trim();
                    if (!q) {
                        renderCategorySections({ renderButtons: true });
                        return;
                    }
                    if (currentEngine === 'site') {
                        elements.clearSearchButton.classList.remove('hidden');
                        const filtered = getFilteredCategoriesByKeyword(q);
                        renderCategorySections({ renderButtons: true, searchMode: true, filteredCategories: filtered });
                    }
                }, 220);
            });
        }
        
        window.addEventListener('scroll', () => {
            elements.backToTopBtn.classList.toggle('hidden', window.scrollY <= 300);
        }, { passive: true });
        
        setupScrollSpy();
        
        setupTooltipDelegation();
    }

    function selectSearchEngine(value, label) {
        currentEngine = value;
        updateSearchEngineUI(value);
        
        const savePrefCheckbox = document.getElementById('save-preference-checkbox');
        if (savePrefCheckbox && savePrefCheckbox.checked) {
            localStorage.setItem('searchEngine', value);
        }
        document.getElementById('search-engine-menu').classList.add('hidden');
    }


    function getAllLinks() {
        return Object.values(categories).map(category => category.links || []).flat();
    }
    
    async function loadLinks(alreadyValidated = false) {
        if (isLoggedIn && !alreadyValidated) {
            const isValid = await validateToken();
            if (!isValid) {
                logout();
                return;
            }
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
        categories[categoryName] = { isHidden: false, isPrivate: false, links: [] };
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

    async function toggleCategoryPrivate(category, isPrivate) {
        if (!await validateTokenOrRedirect()) return;
        categories[category].isPrivate = isPrivate;
        (categories[category].links || []).forEach(l => { l.isPrivate = isPrivate; });
        renderCategories();
        renderCategoryButtons();
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
        setupCardDelegation(container);
        const fragment = document.createDocumentFragment();
        const sourceCategories = searchMode && filteredCategories ? filteredCategories : categories;

        Object.entries(sourceCategories).forEach(([category, { links, isHidden, isPrivate }]) => {
            if (!isEditMode && !isLoggedIn && (isHidden || isPrivate) && !searchMode) return;

            const section = document.createElement('div');
            section.className = 'section section-anchor';
            section.id = sectionId(category);
            section.dataset.category = category;

            // 标题区域
            const titleContainer = document.createElement('div');
            titleContainer.className = 'flex items-center gap-3 mb-5 pb-2 border-b border-[color-mix(in_oklab,var(--muted),var(--border))] dark:border-[color-mix(in_oklab,var(--muted)_70%,var(--border))]';
            
            const title = document.createElement('h2');
            title.className = 'text-lg font-bold text-base-foreground flex items-center gap-2';
            const badge = document.createElement('span');
            badge.className = 'w-1.5 h-5 bg-accent rounded-full inline-block shadow-sm';
            title.append(badge, ' ' + category);
            titleContainer.appendChild(title);

            // 编辑模式下的标题栏操作
            if (isEditMode) {
                const controls = document.createElement('div');
                controls.className = 'flex items-center gap-1 ml-auto bg-[color-mix(in_oklab,var(--muted)_70%,transparent)] dark:bg-[color-mix(in_oklab,var(--muted)_25%,transparent)] p-1 rounded-xl border border-[color-mix(in_oklab,var(--border)_60%,transparent)] dark:border-[color-mix(in_oklab,var(--border)_60%,transparent)] backdrop-blur-sm';
                const btnBase = "w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 active:scale-95";
                
                controls.innerHTML = \`
                    <!-- 编辑名称 -->
                    <button aria-label="重命名分类" class="\${btnBase} text-muted-foreground hover:text-blue-600 hover:bg-blue-100 dark:text-muted-foreground dark:hover:bg-blue-900/30 dark:hover:text-blue-400 has-tooltip" data-tooltip="重命名" data-action="edit" data-category="\${escAttr(category)}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    
                    <div class="w-px h-4 bg-line dark:bg-line-input mx-0.5"></div>

                    <!-- 排序组 -->
                    <button aria-label="上移分类" class="\${btnBase} text-muted-foreground hover:text-accent hover:bg-soft dark:text-muted-foreground dark:hover:bg-soft dark:hover:text-accent has-tooltip" data-tooltip="上移" data-action="move" data-dir="-1" data-category="\${escAttr(category)}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    </button>
                    <button aria-label="下移分类" class="\${btnBase} text-muted-foreground hover:text-accent hover:bg-soft dark:text-muted-foreground dark:hover:bg-soft dark:hover:text-accent has-tooltip" data-tooltip="下移" data-action="move" data-dir="1" data-category="\${escAttr(category)}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <button aria-label="置顶分类" class="\${btnBase} text-muted-foreground hover:text-amber-600 hover:bg-amber-100 dark:text-muted-foreground dark:hover:bg-amber-900/30 dark:hover:text-amber-400 has-tooltip" data-tooltip="置顶" data-action="pin" data-category="\${escAttr(category)}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3h14M18 13l-6-6l-6 6M12 7v14"></path></svg>
                    </button>

                    <div class="w-px h-4 bg-line dark:bg-line-input mx-0.5"></div>

                    <!-- 隐藏开关 -->
                    <div class="flex items-center justify-center w-8 h-8 has-tooltip cursor-pointer" data-tooltip="\${isHidden ? '显示分类' : '隐藏分类'}">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <!-- 下面这一行增加了 DOM 属性更新逻辑 -->
                            <input type="checkbox" aria-label="显示/隐藏分类" data-action="toggleHidden" data-category="\${escAttr(category)}" \${isHidden ? 'checked' : ''} 
                                class="sr-only peer">
                            <div class="w-3.5 h-3.5 rounded-full border-2 border-line peer-focus:outline-none peer dark:border-line-input peer-checked:bg-accent peer-checked:border-accent transition-colors"></div>
                        </label>
                    </div>

                    <!-- 私密开关 -->
                    <div class="flex items-center justify-center w-8 h-8 has-tooltip cursor-pointer" data-tooltip="\${isPrivate ? '设为公开分类' : '设为私密分类'}">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" data-action="togglePrivate" data-category="\${escAttr(category)}" \${isPrivate ? 'checked' : ''} 
                                class="sr-only peer">
                            <div class="w-3.5 h-3.5 rounded-full border-2 border-accent peer-focus:outline-none peer peer-checked:bg-accent peer-checked:border-accent transition-colors"></div>
                        </label>
                    </div>

                    <div class="w-px h-4 bg-line dark:bg-line-input mx-0.5"></div>

                    <!-- 删除 -->
                    <button aria-label="删除分类" class="\${btnBase} text-muted-foreground hover:text-red-600 hover:bg-red-100 dark:text-muted-foreground dark:hover:bg-red-900/30 dark:hover:text-red-400 has-tooltip" data-tooltip="删除分类" data-action="delete" data-category="\${escAttr(category)}">
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
                ? (isCompactActive()
                    ? 'grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-x-1 gap-y-2'
                    : 'grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-2 gap-y-6')
                : (isCompactActive()
                    ? 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-2 gap-y-1.5'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4');
            
            cardContainer.className = \`grid \${gridClasses} card-container relative\`;
            cardContainer.id = gridId(category); // 与 section.id 区分，避免同页面 id 重复

            // 卡片离屏构建后一次性挂载，减少 reflow
            const cardsFragment = document.createDocumentFragment();
            links.forEach(link => {
                const card = createCard(link);
                if (card) cardsFragment.appendChild(card);
            });
            cardContainer.appendChild(cardsFragment);

            section.appendChild(titleContainer);
            section.appendChild(cardContainer);
            fragment.appendChild(section);

            if (isEditMode) {
                const addCardPlaceholder = document.createElement('div');
                const sizeClasses = isAppLayout 
                    ? 'w-16 h-16 rounded-[1.2rem] mx-auto' 
                    : (isCompactActive()
                        ? 'min-h-[44px] p-1.5 rounded-[var(--radius-2xl)] w-full'
                        : 'min-h-[100px] p-4 rounded-[var(--radius-2xl)] w-full');
                
                addCardPlaceholder.className = \`add-card-placeholder group flex flex-col h-full w-full \${sizeClasses} rounded-[var(--radius-2xl)] border-2 border-dashed border-line dark:border-line hover:border-accent dark:hover:border-accent hover:bg-[color-mix(in_oklab,var(--accent)_50%,transparent)] dark:hover:bg-soft transition-all cursor-pointer flex items-center justify-center\`;
                addCardPlaceholder.innerHTML = \`
                    <div class="\${isCompactActive() ? 'w-6 h-6' : 'w-10 h-10'} rounded-full bg-muted dark:bg-muted group-hover:bg-soft dark:group-hover:bg-soft flex items-center justify-center transition-colors pointer-events-none">
                        <svg class="\${isCompactActive() ? 'w-3.5 h-3.5' : 'w-6 h-6'} text-muted-foreground group-hover:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    </div>
                \`;
                
                addCardPlaceholder.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    if (draggedCard && draggedCard.parentElement === cardContainer) {
                        cardContainer.insertBefore(draggedCard, addCardPlaceholder);
                    }
                });
                
                addCardPlaceholder.onclick = () => {
                     showAddDialog();
                     document.getElementById('category-select-value').value = category;
                     document.getElementById('category-select-text').textContent = category;
                };
                cardContainer.appendChild(addCardPlaceholder);
            }
        });

        container.replaceChildren(fragment);

        if (renderButtons) renderCategoryButtons();
        
        setupScrollSpy();
    }

    function renderCategories() {
        document.body.classList.toggle('compact-mode', isCompactActive());
        renderCategorySections({ renderButtons: false });
    } 

    async function searchLinks(query) {
        const clearBtn = document.getElementById('clear-search-button');
        const filteredData = getFilteredCategoriesByKeyword(query);
        const hasMatchingLinks = Object.values(filteredData).some(c => c.links.length > 0);

        if (!hasMatchingLinks) {
            await customAlert('没有找到相关站点。');
            return;
        }
        clearBtn.classList.remove('hidden');
        renderCategorySections({ renderButtons: true, searchMode: true, filteredCategories: filteredData });
    }
    
    function renderCategoryButtons() {
        const container = document.getElementById('category-buttons-container');
        container.innerHTML = '';
        const visibleCategories = Object.keys(categories).filter(c => 
            (categories[c].links || []).some(l => !l.isPrivate || isLoggedIn) && 
            (!categories[c].isHidden || isEditMode || isLoggedIn) &&
            (!categories[c].isPrivate || isLoggedIn)
        );

        if (visibleCategories.length === 0) return;

        visibleCategories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-button whitespace-nowrap px-4 py-1.5 text-xs font-medium rounded-[var(--radius-xl)] border border-line dark:border-line-input transition-all active:scale-95 shadow-sm';
            btn.classList.add('bg-muted', 'dark:bg-muted', 'text-muted-foreground', 'dark:text-muted-foreground', 'hover:bg-[var(--menu-hover)]', 'hover:text-accent', 'dark:hover:text-accent', 'hover:border-accent', 'dark:hover:border-accent');
            
            btn.textContent = cat;
            btn.dataset.target = cat;
            // 仅编辑模式开启拖拽排序
            if (isEditMode) btn.setAttribute('draggable', 'true');
            btn.onclick = () => {
                if (categoryDragSuppressClick) { categoryDragSuppressClick = false; return; }
                scrollToCategory(cat);
            };
            container.appendChild(btn);
        });

        if (!isTouchDevice()) {
            setupDragScroll(container);
        }
        setupCategoryDragSort(container);
    }

    // 分类标签拖拽排序：_catDragSort 防止重复绑定
    let categoryDragSuppressClick = false;
    function setupCategoryDragSort(container) {
        if (!container || container._catDragSort) return;
        container._catDragSort = true;

        let draggedButton = null;

        container.addEventListener('dragstart', (e) => {
            const btn = e.target.closest('.category-button');
            if (!btn || !isEditMode) { e.preventDefault(); return; }
            draggedButton = btn;
            btn.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            // Firefox 要求 setData 才会启动拖拽
            try { e.dataTransfer.setData('text/plain', btn.dataset.target || ''); } catch (_) {}
        });

        container.addEventListener('dragover', (e) => {
            if (!isEditMode || !draggedButton) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const target = e.target.closest('.category-button');
            container.querySelectorAll('.category-button.drag-over').forEach(el => {
                if (el !== target) el.classList.remove('drag-over');
            });
            if (!target || target === draggedButton) return;
            target.classList.add('drag-over');
            // 按鼠标 X 与目标中线比较，实时预览插入位置
            const rect = target.getBoundingClientRect();
            if (e.clientX < rect.left + rect.width / 2) {
                container.insertBefore(draggedButton, target);
            } else {
                container.insertBefore(draggedButton, target.nextSibling);
            }
        });

        container.addEventListener('drop', async (e) => {
            if (!isEditMode) return;
            e.preventDefault();
            if (!draggedButton) return;
            draggedButton = null;
            // 抑制拖拽后可能误触的分类跳转（部分浏览器 drop 后仍派发 click），超时自动复位
            categoryDragSuppressClick = true;
            setTimeout(() => { categoryDragSuppressClick = false; }, 150);
            await commitCategoryOrder(container);
        });

        container.addEventListener('dragend', () => {
            container.querySelectorAll('.category-button').forEach(el => {
                el.classList.remove('dragging', 'drag-over');
            });
            draggedButton = null;
        });
    }

    // 以顶栏 DOM 顺序为准回写 categories 键序并保存
    async function commitCategoryOrder(container) {
        const domOrder = [...container.querySelectorAll('.category-button')].map(b => b.dataset.target);
        const allKeys = Object.keys(categories);
        // 顶栏只渲染"可见分类"，若与全量键数不一致（存在被过滤的分类），
        // 无法安全映射完整顺序，放弃本次拖拽并恢复渲染
        if (domOrder.length !== allKeys.length) {
            renderCategoryButtons();
            return;
        }
        const same = domOrder.every((k, i) => k === allKeys[i]);
        if (same) return;

        const newCategories = {};
        domOrder.forEach(key => { newCategories[key] = categories[key]; });
        Object.keys(categories).forEach(k => delete categories[k]);
        Object.assign(categories, newCategories);

        renderCategories();
        renderCategoryButtons();
        await saveLinks();
    }

    function isTouchDevice() {
        return window.matchMedia('(hover: none)').matches || ('ontouchstart' in window);
    }

    // 分类按钮容器超出宽度后支持鼠标拖动横向滚动
    function setupDragScroll(container) {
        if (!container || container._dragScroll) return;
        container._dragScroll = true;

        let isDown = false;
        let moved = false;
        let captured = false;
        let startX = 0;
        let startScroll = 0;
        let lastX = 0;
        let lastT = 0;
        let vx = 0;
        let inertiaId = null;

        function stopInertia() {
            if (inertiaId !== null) {
                cancelAnimationFrame(inertiaId);
                inertiaId = null;
            }
            vx = 0;
        }

        function inertiaLoop() {
            container.scrollLeft += vx * 16;
            vx *= 0.95;
            if (Math.abs(vx) < 0.08) {
                stopInertia();
                return;
            }
            inertiaId = requestAnimationFrame(inertiaLoop);
        }

        container.addEventListener('pointerdown', (e) => {
            if (e.button !== 0) return;
            // 编辑模式下按住分类标签用于拖拽排序，不触发拖动滚动
            if (isEditMode && e.target.closest('.category-button')) return;
            stopInertia();
            isDown = true;
            moved = false;
            captured = false;
            startX = e.clientX;
            startScroll = container.scrollLeft;
            lastX = e.clientX;
            lastT = performance.now();
            container.style.userSelect = 'none';
            container.style.scrollSnapType = 'none';
            e.preventDefault();
        });

        container.addEventListener('pointermove', (e) => {
            if (!isDown) return;
            const dx = e.clientX - startX;
            const now = performance.now();
            if (Math.abs(dx) > 4) {
                if (!captured) {
                    captured = true;
                    try { container.setPointerCapture(e.pointerId); } catch (_) {}
                }
                moved = true;
                container.scrollLeft = startScroll - dx;
                const dt = (now - lastT) || 16;
                const inst = -(e.clientX - lastX) / dt;
                vx = vx * 0.8 + inst * 0.2;
                lastX = e.clientX;
                lastT = now;
            }
        });

        const endDrag = (e) => {
            if (!isDown) return;
            isDown = false;
            container.style.userSelect = '';
            container.style.scrollSnapType = '';
            if (captured) { try { container.releasePointerCapture(e.pointerId); } catch (_) {} }
            // 拖拽超过阈值时阻止本次点击误触分类按钮
            if (moved) {
                container.addEventListener('click', (ce) => {
                    ce.stopPropagation();
                    ce.preventDefault();
                }, { capture: true, once: true });
                // 惯性滚动
                if (Math.abs(vx) > 0.25) {
                    inertiaId = requestAnimationFrame(inertiaLoop);
                }
            }
        };
        container.addEventListener('pointerup', endDrag);
        container.addEventListener('pointercancel', endDrag);
    }

    function scrollToCategory(catId) {
        const section = document.getElementById(sectionId(catId));
        if(section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function setupScrollSpy() {
        const sections = document.querySelectorAll('.section');
        const buttons = document.querySelectorAll('.category-button');
        
        if (!sections.length || !buttons.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -70% 0px', 
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    highlightButton(id);
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    function highlightButton(id) {
        const buttons = document.querySelectorAll('.category-button');
        buttons.forEach(btn => {
            if (sectionId(btn.dataset.target) === id) {
                btn.classList.remove('bg-muted', 'dark:bg-muted', 'text-muted-foreground', 'dark:text-muted-foreground', 'hover:bg-[var(--menu-hover)]', 'hover:text-accent', 'dark:hover:text-accent');
                btn.classList.add('bg-accent', 'text-accent-foreground', 'shadow-md', 'dark:bg-accent');
                btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                btn.classList.remove('bg-accent', 'text-accent-foreground', 'shadow-md', 'dark:bg-accent');
                btn.classList.add('bg-muted', 'dark:bg-muted', 'text-muted-foreground', 'dark:text-muted-foreground', 'hover:bg-[var(--menu-hover)]', 'hover:text-accent', 'dark:hover:text-accent');
            }
        });
    }

    // --- 遮罩层过渡辅助函数 ---
    // 滚动锁引用计数：弹窗可能互相嵌套（如登录后弹 alert），只有最后一个关闭时才释放页面滚动
    let overlayScrollCount = 0;
    function lockPageScroll() {
        const locked = overlayScrollCount > 0;
        overlayScrollCount++;
        if (!locked) document.body.style.overflow = 'hidden';
    }
    function unlockPageScroll() {
        overlayScrollCount = Math.max(0, overlayScrollCount - 1);
        if (overlayScrollCount === 0) document.body.style.overflow = '';
    }

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
            // 锁定主页滚动，避免滚轮穿透到主页面
            lockPageScroll();
        } else {
            overlay.classList.remove('overlay-visible');
            overlay.classList.add('overlay-hidden');
            
            if(box) {
                box.classList.remove('dialog-scale-visible');
                box.classList.add('dialog-scale-hidden');
            }
            // 释放主页滚动
            unlockPageScroll();
            
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
        const checkAllMenu = document.getElementById('check-all-menu');
        
        loginBtn.innerHTML = isLoggedIn ? 
            '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> 退出登录' : 
            '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg> 登录';
        
        if(isLoggedIn) {
            loginBtn.classList.replace('text-red-500', 'text-base-foreground');
            if(dataToolsMenu) dataToolsMenu.classList.remove('hidden');
            if(checkAllMenu) checkAllMenu.classList.remove('hidden');
        } else {
            if(dataToolsMenu) dataToolsMenu.classList.add('hidden');
            if(checkAllMenu) checkAllMenu.classList.add('hidden');
        }
        
        if (isEditMode) {
            editModeBtn.innerHTML = '<span class="text-red-500 flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>退出编辑</span>';
            document.body.classList.add('edit-mode');
            if(addCategoryContainer) addCategoryContainer.classList.remove('hidden');
        } else {
            editModeBtn.innerHTML = isLoggedIn ? 
                '<span class="flex items-center gap-3"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>进入编辑模式</span>' : 
                '<span class="flex items-center gap-3 text-muted-foreground"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>编辑模式 (需登录)</span>';
            document.body.classList.remove('edit-mode');
            if(addCategoryContainer) addCategoryContainer.classList.add('hidden');
        }
    }
    
    function loadSections() {
        document.getElementById('clear-search-button').classList.add('hidden');
        document.getElementById('search-input').value = '';
        renderCategorySections({ renderButtons: true });
    }

    const imgApi = '/api/icon?url='; 
    const iconCache = new Map();
    const iconFailed = new Set();

    function createIconFallback(refEl) {
        const box = document.createElement('div');
        box.className = refEl.className
            .replace('opacity-0', 'opacity-100')
            .replace('object-contain', '') + ' text-black dark:text-muted-foreground';
        box.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="display:block;width:100%;height:100%"><path fill="currentColor" d="M62 32C62 15.432 48.568 2 32 2C15.861 2 2.703 14.746 2.031 30.72c-.008.196-.01.395-.014.592c-.005.23-.017.458-.017.688v.101C2 48.614 15.432 62 32 62s30-13.386 30-29.899l-.002-.049zM37.99 59.351c-.525-.285-1.029-.752-1.234-1.388c-.371-1.152-.084-2.046.342-3.086c.34-.833-.117-1.795.109-2.667c.441-1.697.973-3.536.809-5.359c-.102-1.119-.35-1.17-1.178-1.816c-.873-.685-.873-1.654-1.457-2.52c-.529-.787.895-3.777.498-3.959c-.445-.205-1.457.063-1.777-.362c-.344-.458-.584-.999-1.057-1.354c-.305-.229-1.654-.995-2.014-.941c-1.813.271-3.777-1.497-4.934-2.65c-.797-.791-1.129-1.678-1.713-2.593c-.494-.775-1.242-.842-1.609-1.803c-.385-1.004-.156-2.29-.273-3.346c-.127-1.135-.691-1.497-1.396-2.365c-1.508-1.863-2.063-4.643-4.924-4.643c-1.537 0-1.428 3.348-2.666 2.899c-1.4-.507-3.566 1.891-3.535 1.568c.164-1.674 1.883-2.488 2.051-2.987c.549-1.638-2.453-1.246-2.068-2.612c.188-.672 2.098-1.161 1.703-1.562c-.119-.122-1.58-1.147-1.508-1.198c.271-.19 1.449.412 1.193-.37c-.086-.26-.225-.499-.357-.74a28 28 0 0 1 1.92-1.975c1.014-.083 2.066-.02 2.447.054c2.416.476 3.256 1.699 5.672.794c1.162-.434 5.445.319 6.059 1.537c.334.666 1.578-.403 2.063-.475c.52-.078 1.695.723 2.053.232c.943-1.291-.604-1.827 1.223-.833c1.225.667 3.619-2.266 2.861 1.181c-.547 2.485-2.557 2.54-4.031 4.159c-1.451 1.594 2.871 2.028 2.982 3.468c.32 4.146 2.531-.338 1.939-1.812c-1.145-2.855 1.303-2.071 2.289-.257c.547 1.007.963.159 1.633-.192c.543-.283.688 1.25.805 1.517c.385.887 1.65 1.152 1.436 2.294c-.238 1.259-1.133.881-2.008 1.094c-.977.237.158 1.059.016 1.359c-.154.328-1.332.464-1.646.65c-.924.544-.359 1.605-1.082 2.175c-.496.392-.996.137-1.092.871c-.113.865-1.707 1.143-1.5 1.97c.057.227.516 1.923.227 2.013c-.133.043-1.184-1.475-1.471-1.627c-.568-.301-3.15-.055-3.482 1.654c-.215 1.105 1.563 2.85 2.016 1.328c.561-1.873.828 1.091.693 1.207c.268.234 1.836-.385 1.371.7c-.197.459.193 1.656.889 1.287c.291-.154 1.041.31 1.172.061a2.14 2.14 0 0 1 .742-.692c.701-.41 1.75-.025 2.518.02c.469.027 4.313 2.124 4.334 2.545c.084 1.575 2.99 1.37 3.436 1.933c1.199 1.526.83.751-.045 2.706c-.441.984-.057 2.191-1.125 2.904c-.514.342-1.141.171-1.598.655c-.412.437-.25.959-.5 1.464c-.301.601-4.346 4.236-4.613 5.115c-.133.441-1.34.825-.322 1.248c.592.174-1.311 1.973-.396 2.718c.223.181.369.334.479.471c-.457.122-.91.233-1.369.333M35.594 4.237c-.039.145.02.316.271.483c.566.375-.162 1.208-.943.671c-.779-.537-2.531.241-2.41.644c.119.403.66.563 1.496.242c.834-.322 1.178.048 1.318.43c.096.259 0 .403-.027.752c-.025.349-.996.107-1.803.162c-.809.054-1.67-.162-1.645-.619c.027-.456-.861-1.289-1.391-1.637c-.529-.348.232-1.1.934-.537c.699.564.727-.107 1.535-.321c.459-.122.275-.305.119-.479q1.29.047 2.546.209m3.517 8.869c.605.164 1.656.929 1.656 1.291c0 .363-.477.817-.688.765c-1.523-.371-2.807-1.874-3.514-2.697c-1.234-1.435-1.156-.205-3.111-.826c-.5-.16-1.293-1.711-.768-2.476s1.131-.886 1.615-.683c.484.2 1.898-.645 2.223.362c.322 1.007 1.211 2.292 2.02 2.636c.81.342-.04 1.464.567 1.628m.485 4.673c.242.483-1.455-.564-1.859-1.047c-.402-.482-1.01-1.571-.523-2.054c.484-.482 1.57 1.005 2.141 1.33c1.129.645-.001 1.289.241 1.771m-8.594-7.315c.117-.161.365.242.586.645s-.084.971-.586.885c-.502-.084-.281-1.136 0-1.53m0-4.052s.473 1.154 0 .966s-.496-.671 0-.966m.096 3.65c-.135-.321-.166-1.64.162-2.04c.484-.59 1.266.564.74 1.02c-.525.457-.768 1.343-.902 1.02m-6.077 1.415c-.879-.063-.898-.823-1.02-1.226s-.85.765-1.586 0s.172-1.771.01-2.376c-.162-.604 1.736 0 2.02 0s1.051 1.248 1.252 1.227c.203-.02 1.293.987 1.293.584c0-.402.166-1.088.93-1.168c1.172-.121.121 1.289.08 1.838c-.039.549.891 1.504 1.232 1.907c.344.403-.867.686-1.07.443c-.201-.242-.727 0-1.172.322c-.443.322-1.656-.443-2.221-.685c-.566-.241 1.131-.804.252-.866m3.141-6.354c.781.269 1.225.51 1.609 0c.371-.492.654 1.073.385 1.502c-.27.431-.781.324-.863 0c-.08-.32-1.912-1.771-1.131-1.502m1.131 4.859c-.268-.35-.295-.752 0-1.047c.297-.295.201-.644.729-.751c.26-.054.295.348.295.724s.324.859 0 1.448c-.323.589-.754-.026-1.024-.374m2.205-5.969c-.012.074-.061.118-.184.106a.6.6 0 0 1-.236-.095q.21-.008.42-.011M25.389 5.15c.619 0 .539.418 1.051.719c.512.3.242-1.552.592-.854c.35.697 1.389 1.664.889 1.851c-.43.163-2.234.859-2.396.739s-.377-.63-.809-.739c-.432-.107-.889-1.127-1.186-1.1c-.113.01-.123-.184-.049-.442a28 28 0 0 1 1.572-.455c.058.158.146.281.336.281m13.519 30.025c-.645.666-1.756-.464-2.523-.424s-1.152-.765-1.818-.684c-.668.079.182-.847 1.111-.362c.927.483 3.756.925 3.23 1.47m12.93-22.934c-.188.24-.402.408-.607.585c-.605.524-1.736.484-1.898.846s-.566 1.489-1.98 1.494s-1.01 2.131-1.131 2.738s-.443 1.325-.848.801s-.566-.323-1.816-1.853s-.77-2.375-.365-2.818c.404-.442.566-1.49 0-1.329s-.889-.202-.768-.703s.727-.867 0-1.402s-.324-2.445-.889-4.189c-.566-1.745-1.334-.51-2.586-.443s-1.455-.873-.889-1.303a27.95 27.95 0 0 1 13.777 7.576"/></svg>';
        return box;
    }

    // HTML 属性转义：防止用户数据中的引号破坏模板属性（配合 data-* 委托使用）
    function escAttr(v) {
        return String(v).replace(/[&<>"']/g, c => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[c]));
    }

    // 把用户分类名转成合法且稳定的 DOM id，避免把任意用户数据拼进 id
    function slugId(v) {
        const s = String(v).trim().replace(/[^A-Za-z0-9\u4e00-\u9fa5_-]+/g, '-').replace(/^-+|-+$/g, '');
        return (s || 'cat') + '-' + Math.abs([...String(v)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 0));
    }
    // 供 scrollToCategory / renderCategoryGrid 复用，与渲染时的 slugId 保持一致
    function gridId(category) { return 'grid-' + slugId(category); }
    function sectionId(category) { return 'sec-' + slugId(category); }

    // 只放行 http/https，其余返回 null（拦截 javascript:/data: 等）
    function safeUrl(raw) {
        try {
            const u = new URL(String(raw), location.href);
            if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
            return u.toString();
        } catch (e) { return null; }
    }

    function createCard(link) {
        if (!isEditMode && link.isPrivate && !isLoggedIn) return null;

        const card = document.createElement('div');
        
        let cardBaseClass = isAppLayout 
            ? 'flex flex-col items-center justify-start py-1 gap-1.5 hover:z-10' 
            : 'flex flex-col ' + (isCompactActive() ? 'px-2 py-1.5' : 'p-4') + ' bg-[color-mix(in_oklab,var(--card)_90%,transparent)] dark:bg-[color-mix(in_oklab,var(--card)_60%,transparent)] backdrop-blur-sm border border-line dark:border-[color-mix(in_oklab,var(--border)_50%,transparent)] hover:border-[color-mix(in_oklab,var(--primary)_50%,transparent)] dark:hover:border-[color-mix(in_oklab,var(--primary)_50%,transparent)] shadow-sm hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] dark:shadow-none dark:hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.4)] hover:-translate-y-1.5';
            
        if (link.isPrivate && !isAppLayout) {
            cardBaseClass += ' ring-1 ring-amber-400/40 bg-[color-mix(in_oklab,var(--card)_85%,transparent)] dark:bg-amber-900/10 !border-amber-200 dark:!border-amber-700/50';
        }

        card.className = \`group relative h-full w-full rounded-[var(--radius-2xl)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer select-none \${cardBaseClass}\`;
        
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
            : 'flex items-center gap-2.5 ' + (isCompactActive() ? 'mb-0.5' : 'mb-2.5') + ' w-full';
        
        const iconWrap = document.createElement('div');
        const iconWrapClass = isAppLayout
            ? 'relative w-14 h-14 sm:w-16 sm:h-16'
            : (isCompactActive() ? 'relative w-7 h-7' : 'relative w-9 h-9');
        iconWrap.className = iconWrapClass;

        const spinner = document.createElement('span');
        spinner.className = 'absolute inset-0 flex items-center justify-center pointer-events-none';
        spinner.innerHTML = '<span class="block icon-spinner rounded-full animate-spin" style="width:60%;height:60%;aspect-ratio:1/1;"></span>';

        const icon = document.createElement('img');
        icon.alt = '';
        icon.setAttribute('loading', 'lazy'); 
        icon.setAttribute('decoding', 'async'); 
        icon.setAttribute('width', isAppLayout ? 64 : (isCompactActive() ? 28 : 36)); 
        icon.setAttribute('height', isAppLayout ? 64 : (isCompactActive() ? 28 : 36));
        
        // 图标样式
        let iconClass = 'relative w-full h-full opacity-0 transition duration-300';
        if (isAppLayout) {
             // APP 风格：大图标、白底、大圆角、阴影
             iconClass += ' rounded-[1.2rem] object-contain bg-muted dark:bg-muted p-2 shadow-md hover:shadow-lg group-hover:scale-105 group-active:scale-95 z-10';
             if (link.isPrivate) {
                 iconClass += ' ring-2 ring-amber-400';
             }
        } else {
             // 列表风格：小图标、淡底
             iconClass += ' rounded-lg object-contain bg-muted dark:bg-muted p-1 border border-line dark:border-line transition-transform group-hover:scale-105 pointer-events-none';
        }
        icon.className = iconClass;

        let resolvedSrc;
        if (link.icon && link.icon.startsWith('http')) {
            resolvedSrc = link.icon;
        } else if (iconCache.has(link.url)) {
            resolvedSrc = iconCache.get(link.url);
        } else {
            resolvedSrc = imgApi + encodeURIComponent(link.url);
            iconCache.set(link.url, resolvedSrc);
        }
        let iconNode = icon;
        if (iconFailed.has(resolvedSrc)) {
            iconNode = createIconFallback(icon);
        } else {
            icon.src = resolvedSrc;
            icon.onload = function() {
                this.classList.add('opacity-100');
                this.classList.remove('opacity-0');
                spinner.remove();
            };
            icon.onerror = function() {
                iconFailed.add(resolvedSrc);
                this.onerror = null; // 防止替换后再出错进入死循环
                this.replaceWith(createIconFallback(this));
                spinner.remove();
            };
        }
        if (iconNode === icon) iconWrap.appendChild(spinner);
        iconWrap.appendChild(iconNode);
        
        const title = document.createElement('div');
        const titleAlign = isAppLayout 
            ? 'text-center text-xs sm:text-sm font-medium mt-1 w-[120%] truncate px-1 text-base-foreground dark:text-base-foreground drop-shadow-sm' 
            : 'font-semibold text-sm flex-1 truncate text-base-foreground group-hover:text-accent dark:group-hover:text-accent transition-colors pointer-events-none';
        
        title.className = \`card-title pointer-events-none \${titleAlign}\`;
        title.textContent = link.name;
        
        header.appendChild(iconWrap);
        header.appendChild(title);

        const statusTag = document.createElement('span');
        statusTag.className = 'card-status-tag';
        statusTag.setAttribute('data-for', link.url);
        statusTag.textContent = '';
        header.appendChild(statusTag);

        card.appendChild(header);

        if (!isAppLayout && !isCompactActive()) {
            const desc = document.createElement('div');
            desc.className = 'text-xs text-muted-foreground line-clamp-2 min-h-[1.25rem] card-tip leading-relaxed pointer-events-none w-full';
            desc.textContent = link.tips || '';
            card.appendChild(desc);
        }

        if (link.isPrivate && !isAppLayout) {
            const badge = document.createElement('div');
            badge.className = 'absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-[var(--radius-2xl)]';
            badge.innerHTML = '<div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-8 h-8 bg-amber-400"></div>';
            card.appendChild(badge);
        }

        const prevResult = latencyResults[siteKey(link.url)];
        if (prevResult === 'checking') {
            renderStatus(card, 'checking');
        } else if (prevResult) {
            renderStatus(card, prevResult);
        }

        if (isEditMode) {
            const actionWrapper = document.createElement('div');
            actionWrapper.className = isAppLayout 
                ? 'absolute top-[-4px] right-[-4px] z-30' 
                : 'absolute top-2 right-2 z-30';

            const menuBtn = document.createElement('button');
            const btnStyle = isAppLayout
                ? 'w-6 h-6 rounded-full bg-secondary dark:bg-muted text-muted-foreground shadow-sm hover:bg-accent dark:hover:bg-accent hover:text-accent-foreground'
                : 'w-7 h-7 rounded-lg text-muted-foreground hover:text-muted-foreground dark:hover:text-base-foreground hover:bg-[color-mix(in_oklab,var(--muted)_80%,transparent)] dark:hover:bg-[color-mix(in_oklab,var(--muted)_60%,transparent)] backdrop-blur-sm';
            
            menuBtn.className = \`\${btnStyle} flex items-center justify-center transition-all duration-200\`;
            menuBtn.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>';
            
            const dropdown = document.createElement('div');
            dropdown.className = 'hidden absolute right-0 top-6 w-28 bg-card rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform origin-top-right transition-all z-50 flex flex-col p-1 card-menu-dropdown';
            
            dropdown.innerHTML = \`
                <button class="menu-edit w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-base-foreground dark:text-base-foreground hover:bg-soft dark:hover:bg-[color-mix(in_oklab,var(--muted)_60%,transparent)] hover:text-accent transition-colors flex items-center gap-2">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    编辑
                </button>
                <button class="menu-delete w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-base-foreground dark:text-base-foreground hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors flex items-center gap-2">
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

        if (!isEditMode) {
            card.onclick = () => {
                 const target = safeUrl(link.url);
                 if (target) window.open(target, '_blank', 'noopener,noreferrer');
            };
        }


        if (!isEditMode && link.tips) {
            card.classList.add('has-tooltip');
            card.setAttribute('data-tooltip', link.tips);
        }

        return card;
    }

    // 卡片级事件委托：drag/touch 只在容器上绑定一次，监听器数量与卡片数解耦
    function setupCardDelegation(container) {
        if (!container || container._cardDelegation) return;
        container._cardDelegation = true;

        container.addEventListener('dragstart', (e) => {
            const card = e.target.closest('.card');
            if (!card) return;
            dragStart.call(card, e);
        });
        container.addEventListener('dragover', (e) => {
            if (!isEditMode || !e.target.closest('.card-container')) return;
            dragOver(e);
        });
        container.addEventListener('dragend', (e) => {
            const card = e.target.closest('.card');
            if (card) card.classList.remove('dragging');
        });
        container.addEventListener('drop', drop);
        container.addEventListener('touchstart', (e) => {
            const card = e.target.closest('.card');
            if (!card) return;
            touchStart(e);
        }, { passive: false });

        // 全局关闭卡片菜单
        if (!window.hasAddedCardMenuListener) {
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.card-menu-dropdown') && !e.target.closest('button')) {
                    document.querySelectorAll('.card-menu-dropdown').forEach(el => el.classList.add('hidden'));
                }
            });
            window.hasAddedCardMenuListener = true;
        }

        // 分类标题栏操作按钮：事件委托，避免模板字符串内联 onClick 的注入风险
        container.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action]');
            if (!btn) return;
            const action = btn.dataset.action;
            const category = btn.dataset.category;
            if (action === 'move') {
                moveCategory(category, Number(btn.dataset.dir) || 0);
            } else if (action === 'edit') {
                editCategoryName(category);
            } else if (action === 'pin') {
                pinCategory(category);
            } else if (action === 'delete') {
                deleteCategory(category);
            }
        });
        container.addEventListener('change', (e) => {
            const input = e.target.closest('[data-action="toggleHidden"], [data-action="togglePrivate"]');
            if (!input) return;
            const tipBox = input.closest('.has-tooltip');
            const isPrivate = input.dataset.action === 'togglePrivate';
            if (tipBox) tipBox.setAttribute('data-tooltip', input.checked ? (isPrivate ? '设为公开分类' : '显示分类') : (isPrivate ? '设为私密分类' : '隐藏分类'));
            if (isPrivate) {
                toggleCategoryPrivate(input.dataset.category, input.checked);
            } else {
                toggleCategoryHidden(input.dataset.category, input.checked);
            }
        });
    }
    
    function updateCategorySelect() {
        const menu = document.getElementById('category-select-menu');
        menu.innerHTML = '';
        Object.keys(categories).forEach(cat => {
            const item = document.createElement('div');
            item.className = 'px-4 py-2.5 text-sm text-base-foreground dark:text-base-foreground hover:bg-soft dark:hover:bg-muted cursor-pointer transition-colors';
            item.textContent = cat;
            item.onclick = () => {
                document.getElementById('category-select-value').value = cat;
                document.getElementById('category-select-text').textContent = cat;
                menu.classList.add('hidden');
            };
            menu.appendChild(item);
        });
    }

    function renderCategoryGrid(category) {
        const grid = document.getElementById(gridId(category));
        const cat = categories[category];
        if (!grid || !cat) return;

        const cardsFragment = document.createDocumentFragment();
        cat.links.forEach(link => {
            const card = createCard(link);
            if (card) cardsFragment.appendChild(card);
        });

        Array.from(grid.children).forEach(child => {
            if (!child.classList.contains('add-card-placeholder')) child.remove();
        });

        const placeholder = grid.querySelector('.add-card-placeholder');
        if (placeholder) {
            grid.insertBefore(cardsFragment, placeholder);
        } else {
            grid.appendChild(cardsFragment);
        }
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

        hideAddDialog();

        categories[category].links.push(newLink);
        try {
            await saveLinks();
        } catch (e) {
            await customAlert('添加失败: ' + e);
        }

        if (isEditMode || !newLink.isPrivate || isLoggedIn) {
            renderCategoryGrid(category);
            renderCategoryButtons();
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
        let oldCategory = null;

        // 兜底：若表单分类为空（存量 link.category 缺失时可能出现），回退到 oldLink 原分类，
        // 避免写入 categories[undefined]
        if (!updatedLink.category) {
            for (const c in categories) {
                if (categories[c].links.some(l => l.url === oldLink.url)) { updatedLink.category = c; break; }
            }
        }
        
        for (const cat in categories) {
             const idx = categories[cat].links.findIndex(l => l.url === oldLink.url);
             
             if (idx !== -1) {
                 found = true;
                 oldCategory = cat;
                 
                 if (cat === updatedLink.category) {
                     categories[cat].links[idx] = updatedLink;
                 } 
                 else {
                     categories[cat].links.splice(idx, 1);
                     
                     if(!categories[updatedLink.category]) {
                         categories[updatedLink.category] = { isHidden:false, isPrivate:false, links:[] };
                     }
                     categories[updatedLink.category].links.push(updatedLink);
                 }
                 break; 
             }
        }
        
        if (!found) {
             if(!categories[updatedLink.category]) {
                 categories[updatedLink.category] = { isHidden:false, isPrivate:false, links:[] };
             }
             oldCategory = updatedLink.category;
             categories[updatedLink.category].links.push(updatedLink);
        }

        hideAddDialog();
        await saveLinks();
        renderCategoryGrid(oldCategory);
        if (updatedLink.category !== oldCategory) renderCategoryGrid(updatedLink.category);
        renderCategoryButtons();
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
        // 优先取 data-category（原始分类名），兼容回退到 section.id（脱敏 slug）
        const category = section.dataset.category || section.id;
        return { category: category, index: index };
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
        if (draggedCard && target && target !== draggedCard) {
            const container = target.parentElement;
            const rect = target.getBoundingClientRect();
            if (e.clientX < rect.left + rect.width / 2) {
                container.insertBefore(draggedCard, target);
            } else {
                container.insertBefore(draggedCard, target.nextSibling);
            }
        }
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
            mobilePlaceholder.classList.add('border-dashed', 'border-2', 'border-accent');

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
                moveEvent.preventDefault(); 
                
                lastTouchX = moveTouch.clientX;
                lastTouchY = moveTouch.clientY;

                const now = Date.now();
                if (now - lastSwapTime > 30) { 
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
            if (rafId) cancelAnimationFrame(rafId);
            
            if (isMobileDragging) {
                // 离场动画
                if (mobileClone && mobilePlaceholder) {
                    const rect = mobilePlaceholder.getBoundingClientRect();
                    mobileClone.style.transition = 'all 0.2s ease-out';
                    mobileClone.style.left = rect.left + 'px';
                    mobileClone.style.top = rect.top + 'px';
                    mobileClone.style.opacity = '0';

                    setTimeout(() => {
                        if (mobileClone) mobileClone.remove();
                        if (mobilePlaceholder) {
                             mobilePlaceholder.style.opacity = '';
                             mobilePlaceholder.classList.remove('border-dashed', 'border-2', 'border-accent');
                        }
                        
                        // 保存排序
                        saveCardOrder();

                        mobilePlaceholder = null;
                        mobileClone = null;
                    }, 200);
                } else {
                    if (mobileClone) mobileClone.remove();
                    if (mobilePlaceholder) mobilePlaceholder.style.opacity = '';
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
            // 用 data-category（原始名）做分类键，与 categories 对象键一致；回退到 section.id
            const catName = sec.dataset.category || sec.id;
            const oldCat = categories[catName];
            newCategories[catName] = { isHidden: oldCat ? oldCat.isHidden : false, isPrivate: oldCat ? oldCat.isPrivate : false, links: [] };
            
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
        if (typeof window.__getThemeData === 'function') {
            window.__applyThemeVars(window.__getThemeData(), isDark);
        }
        updateThemeSwitchUI();
        const ov = document.getElementById('theme-dialog-overlay');
        if (ov && !ov.classList.contains('overlay-hidden') && typeof refreshThemeUI === 'function') {
            refreshThemeUI();
        }
    }
    
    function updateThemeSwitchUI() {
        const isDark = document.documentElement.classList.contains('dark');
        const checkbox = document.getElementById('theme-switch-checkbox');
        if(checkbox) checkbox.checked = isDark;
    }

    /* ===== 主题皮肤 ===== */
    // 内置推荐主题库：preview 色值仅用于卡片渲染（零网络），应用时经 fetchTheme 拉取全量 cssVars
    const BUILTIN_THEMES = [
        { id: 'default', name: '默认配色', tags: ['清爽绿'], preview: { light: { background: '#ffffff', foreground: '#334155', primary: '#16a34a', secondary: '#f1f5f9', accent: '#4ade80' }, dark: { background: '#0f172a', foreground: '#e2e8f0', primary: '#4ade80', secondary: '#1e293b', accent: '#22c55e' } }, builtin: true },
        { id: 'claude', name: 'Claude', tags: ['暖色'], preview: { light: { background: '#faf9f5', foreground: '#4a4540', primary: '#d97757', secondary: '#ece9e2', accent: '#e9e5dc' }, dark: { background: '#262624', foreground: '#d4cfc4', primary: '#cd6e4e', secondary: '#3d3c38', accent: '#33322e' } } },
        { id: 'amethyst-haze', name: 'Amethyst Haze', tags: ['优雅紫'], preview: { light: { background: '#f5f3f8', foreground: '#4a4160', primary: '#7c5fa8', secondary: '#cbbde0', accent: '#d8a2b8' }, dark: { background: '#251f33', foreground: '#e7e2f1', primary: '#9d82c4', secondary: '#4a4160', accent: '#b0748f' } } },
        { id: 'catppuccin', name: 'Catppuccin', tags: ['柔和'], preview: { light: { background: '#eff1f5', foreground: '#4c4f69', primary: '#7287fd', secondary: '#ccd0da', accent: '#f9b8c4' }, dark: { background: '#303446', foreground: '#c6d0f5', primary: '#a6d189', secondary: '#414559', accent: '#f2d5cf' } } },
        { id: 'kodama-grove', name: 'Kodama Grove', tags: ['自然绿'], preview: { light: { background: '#f4f7f2', foreground: '#3a4a3a', primary: '#4a7c59', secondary: '#dfe8dd', accent: '#8fbf9f' }, dark: { background: '#1f2a22', foreground: '#dce8dc', primary: '#7fb98b', secondary: '#34453a', accent: '#5d8f6f' } } },
        { id: 'quantum-rose', name: 'Quantum Rose', tags: ['玫粉'], preview: { light: { background: '#fdf2f5', foreground: '#5a3a45', primary: '#e2559a', secondary: '#f6dbe4', accent: '#f2a4c4' }, dark: { background: '#2a1c24', foreground: '#f5ddea', primary: '#e87ea8', secondary: '#4a3340', accent: '#c25a86' } } },
        { id: 'elegant-luxury', name: 'Elegant Luxury', tags: ['沉稳'], preview: { light: { background: '#f8f6f2', foreground: '#3c3830', primary: '#b08968', secondary: '#e9e2d6', accent: '#c9b69a' }, dark: { background: '#211c18', foreground: '#e8e0d4', primary: '#cba47f', secondary: '#3a322a', accent: '#a58160' } } },
        { id: 'neo-brutalism', name: 'Neo Brutalism', tags: ['高饱和'], preview: { light: { background: '#fff8e7', foreground: '#1a1a1a', primary: '#f04b3c', secondary: '#ffd23f', accent: '#5ac8fa' }, dark: { background: '#1a1a1a', foreground: '#fff8e7', primary: '#ff6b5e', secondary: '#ffd23f', accent: '#5ac8fa' } } },
        { id: 'graphite', name: 'Graphite', tags: ['极简灰'], preview: { light: { background: '#f5f5f5', foreground: '#333333', primary: '#71717a', secondary: '#e4e4e7', accent: '#a1a1aa' }, dark: { background: '#18181b', foreground: '#d4d4d8', primary: '#a1a1aa', secondary: '#27272a', accent: '#71717a' } } }
    ];

    function getThemeMeta(key, fallback) {
        const v = localStorage.getItem(key);
        return v === null ? fallback : v;
    }
    function getThemeName() { return getThemeMeta('themeName', null); }
    function getThemeKind() { return getThemeMeta('themeKind', window.__getThemeData() ? 'custom' : 'default'); }
    function isInternalThemeSource(s) {
        if (!s) return false;
        return s.indexOf('tweakcn:') === 0 || s.indexOf('json:') === 0 || s === 'file';
    }
    function safeSetItem(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { console.warn('localStorage 写入失败:', k, e); return false; } }
    function safeRemoveItem(k) { try { localStorage.removeItem(k); } catch (e) { console.warn('localStorage 移除失败:', k, e); } }

    // 快照当前主题（回退用）
    function snapshotCurrentTheme() {
        return {
            themeData: window.__getThemeData(),
            themeSource: getThemeMeta('themeSource', null),
            themeName: getThemeName(),
            themeKind: getThemeKind()
        };
    }
    function saveLastSnapshot(from) {
        try { localStorage.setItem('lastTheme', JSON.stringify(from)); } catch (e) { /* 忽略 */ }
    }
    function getLastSnapshot() {
        try { return JSON.parse(localStorage.getItem('lastTheme') || 'null'); } catch (e) { return null; }
    }
    function lastSnapshotExists() { return !!getLastSnapshot(); }

    function themeStatusLabel(kind, name) {
        switch (kind) {
            case 'builtin': return name || '内置主题';
            case 'ai': return 'AI · ' + (name || '生成主题');
            case 'custom': return name ? '自定义主题（' + name + '）' : '自定义主题';
            default: return '默认配色';
        }
    }

    function renderThemeStatusBar() {
        const bar = document.getElementById('theme-status-bar');
        if (!bar) return;
        const data = window.__getThemeData();
        const kind = getThemeKind();
        const name = getThemeName();
        const isDark = document.documentElement.classList.contains('dark');
        const label = themeStatusLabel(kind, name);
        const guideMap = {
            default: '选一个喜欢的卡片即可换肤，点击后立刻生效。',
            builtin: '点其他卡片可一键切换；不满意可回退上一套。',
            custom: '点其他卡片可一键切换；不满意可回退上一套。',
            ai: '点其他卡片可一键切换；不满意可回退上一套。'
        };
        const guide = document.getElementById('theme-guide');
        if (guide) guide.textContent = guideMap[kind] || guideMap.default;
        // 取色块：内置主题用 preview 里的对应色；否则用默认绿系
        let swatches = ['#16a34a', '#f1f5f9', '#4ade80'];
        const b = kind === 'default' ? null : BUILTIN_THEMES.find(t => t.name === name);
        if (data && b) {
            const p = b.preview[isDark ? 'dark' : 'light'];
            swatches = [p.primary, p.secondary, p.accent];
        }
        bar.innerHTML =
            '<div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 px-4 rounded-[var(--radius-xl)] bg-muted dark:bg-muted">' +
              '<div class="flex items-center gap-2 min-w-0">' +
                '<span class="shrink-0 flex gap-1">' +
                  swatches.map(c => '<span class="inline-block w-3.5 h-3.5 rounded-full border" style="background:' + esc(c) + ';border-color:rgba(128,128,128,0.35)"></span>').join('') +
                '</span>' +
                '<span class="truncate text-sm font-medium text-base-foreground">' + esc('当前：' + label) + '</span>' +
              '</div>' +
              '<span class="flex items-center gap-2 shrink-0 basis-full md:basis-auto max-w-full">' +
                (isLoggedIn && _themePushFailed ? '<button onclick="retryThemePush()" title="主题推送到云端失败，点击立即重试" class="px-2.5 py-1.5 rounded-[var(--radius-xl)] text-xs font-medium text-amber-600 dark:text-amber-400 hover:bg-secondary transition-colors shrink-0">未同步 · 重试</button>' : '') +
                (lastSnapshotExists() ? '<button onclick="restoreLastTheme()" class="px-2.5 py-1.5 rounded-[var(--radius-xl)] text-xs font-medium text-muted-foreground hover:bg-secondary dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-colors">回退上一套</button>' : '') +
                '<button onclick="resetCustomTheme()" class="px-2.5 py-1.5 rounded-[var(--radius-xl)] text-xs font-medium text-muted-foreground hover:bg-secondary dark:hover:bg-[color-mix(in_oklab,var(--muted)_40%,transparent)] transition-colors">恢复默认</button>' +
              '</span>' +
            '</div>';
        renderThemeKindToggle();
    }
    function renderThemeKindToggle() {
        const el = document.getElementById('theme-kind-toggle');
        if (el) el.textContent = '跟随「' + (document.documentElement.classList.contains('dark') ? '深色' : '浅色') + '」模式';
    }

    function themeCardHTML(t) {
        const isDark = document.documentElement.classList.contains('dark');
        const p = t.preview[isDark ? 'dark' : 'light'];
        const data = window.__getThemeData();
        const kind = getThemeKind();
        const isActive = (t.id === 'default') ? !data : (kind === 'builtin' && getThemeName() === t.name);
        const borderColor = isActive ? p.primary : 'rgba(128,128,128,0.25)';
        return '<button type="button" data-theme-id="' + esc(t.id) + '" data-theme-name="' + esc(t.name) + '" ' +
            'class="theme-card w-full text-left rounded-2xl px-3 py-2.5 border transition-all duration-150 hover:translate-y-[-2px] hover:shadow-lg ' + (isActive ? 'theme-card-active' : '') + '" ' +
            'style="background:' + esc(p.background) + ';border-color:' + esc(borderColor) + ';color:' + esc(p.foreground) + (isActive ? ';--ring-color:' + esc(p.primary) : '') + '">' +
            '<div class="flex items-center justify-between gap-2 mb-2">' +
              '<div class="flex gap-1 shrink-0">' +
                '<span class="inline-block w-3 h-3 rounded-sm border" style="background:' + esc(p.primary) + ';border-color:rgba(128,128,128,0.35)"></span>' +
                '<span class="inline-block w-3 h-3 rounded-sm border" style="background:' + esc(p.secondary) + ';border-color:rgba(128,128,128,0.35)"></span>' +
                '<span class="inline-block w-3 h-3 rounded-sm border" style="background:' + esc(p.accent) + ';border-color:rgba(128,128,128,0.35)"></span>' +
              '</div>' +
              '<span class="text-[10px] opacity-70 truncate">' + esc(t.tags.join(' · ')) + '</span>' +
            '</div>' +
            '<div class="flex items-center justify-between gap-2">' +
              '<div class="text-sm font-semibold truncate min-w-0">' + esc(t.name) + '</div>' +
              (isActive ? '<span class="shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full" style="background:' + esc(p.primary) + ';color:' + esc(p.background) + '">使用中</span>' : '') +
            '</div>' +
            '</button>';
    }

    let activeThemeLoadP = null;
    function renderThemeGrid() {
        const grid = document.getElementById('theme-grid');
        if (!grid) return;
        grid.innerHTML = BUILTIN_THEMES.map(themeCardHTML).join('');
        grid.querySelectorAll('.theme-card').forEach(c => {
            c.addEventListener('click', onThemeCardClick);
        });
    }

    async function onThemeCardClick(e) {
        const card = e.currentTarget;
        if (activeThemeLoadP) return;
        const id = card.dataset.themeId;
        const name = card.dataset.themeName;
        if (id === 'default') { applyDefaultTheme(); return; }
        await applyBuiltinById(id, name);
    }
    async function applyBuiltinById(id, name) {
        saveLastSnapshot(snapshotCurrentTheme());
        setCardLoading(true, name);
        try {
            const t = await fetchTheme(id);
            if (!t) throw new Error('主题数据为空');
            const themeLayer = t.theme || {};
            const tLight = Object.assign({}, themeLayer, t.light || {});
            const tDark = Object.assign({}, themeLayer, t.dark || t.light || {});
            cacheTheme(id, t);
            const meta = BUILTIN_THEMES.find(b => b.id === id);
            applyThemeData({ data: { light: tLight, dark: tDark, theme: themeLayer, fonts: t.fonts || themeLayer.fonts || null }, name: meta ? meta.name : name, kind: 'builtin', source: 'tweakcn:' + id });
        } catch (err) {
            safeRemoveItem('lastTheme'); // 失败不保留快照，原主题不变
            setThemeError('获取失败：' + err.message + '，已保留原主题');
        } finally {
            if (activeThemeLoadP) setCardLoading(false);
        }
    }

    function restoreSiteDefaultTheme() {
        safeRemoveItem('themeData');
        safeRemoveItem('themeSource');
        safeRemoveItem('themeName');
        safeRemoveItem('themeKind');
        safeSetItem('themeUpdatedAt', String(Date.now()));
        safeSetItem('themePersonal', isLoggedIn ? '0' : '1');
        window.__applyThemeVars(null, document.documentElement.classList.contains('dark'));
        const input = document.getElementById('theme-input');
        if (input) input.value = '';
        setCardLoading(false);
        refreshThemeUI();
    }
    function applyDefaultTheme() {
        if (!window.__getThemeData() && !getThemeName()) { refreshThemeUI(); return; }
        saveLastSnapshot(snapshotCurrentTheme());
        restoreSiteDefaultTheme();
        scheduleThemeSync();
    }

    function applyThemeData({ data, name, kind, source }) {
        if (name != null) safeSetItem('themeName', name); else safeRemoveItem('themeName');
        safeSetItem('themeKind', kind || 'custom');
        safeSetItem('themeData', JSON.stringify(data));
        if (source != null) safeSetItem('themeSource', source); else safeRemoveItem('themeSource');
        safeSetItem('themeUpdatedAt', String(Date.now()));
        safeSetItem('themePersonal', '1'); 
        window.__applyThemeVars(data, document.documentElement.classList.contains('dark'));
        setCardLoading(false);
        refreshThemeUI();
        scheduleThemeSync();
    }

    function collectLocalTheme() {
        return {
            themeData: window.__getThemeData() || null,
            name: getThemeName() || '',
            kind: getThemeMeta('themeKind', '') || '',
            source: getThemeMeta('themeSource', '') || '',
        };
    }
    let _themeSyncTimer = null;
    let _themePushFailed = false; 
    function scheduleThemeSync() {
        if (!isLoggedIn) return;
        clearTimeout(_themeSyncTimer);
        _themeSyncTimer = setTimeout(pushThemeToKv, 800);
    }

    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden' && isLoggedIn && _themeSyncTimer) {
            clearTimeout(_themeSyncTimer);
            _themeSyncTimer = null;
            try {
                fetchWithAuth('/api/saveTheme', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(collectLocalTheme()),
                    keepalive: true,
                }).catch(function () { });
            } catch (e) { /* 忽略 */ }
        }
    });

    function retryThemePush() { pushThemeToKv(); }
    async function pushThemeToKv() {
        if (!isLoggedIn) return;
        _themeSyncTimer = null;
        let ok = false;
        try {
            const res = await fetchWithAuth('/api/saveTheme', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(collectLocalTheme()),
            });
            if (res.ok) {
                const j = await res.json();
                if (j && j.updatedAt) {
                    safeSetItem('themeUpdatedAt', String(j.updatedAt));
                    safeSetItem('themePersonal', '0');
                    ok = true;
                }
            }
        } catch (e) { /* 网络异常：本地已生效，标记失败等待重试 */ }
        if (_themePushFailed !== ok) {
            _themePushFailed = !ok;
            renderThemeStatusBar();
        }
    }

    async function pullThemeFromKv() {
        if (!isLoggedIn) return;
        try {
            const res = await fetchWithAuth('/api/getTheme');
            if (!res.ok) return;
            const j = await res.json();
            const remote = j && j.theme;
            if (!remote || remote.updatedAt == null) return; // 从未同步过：保留本地
            const local = Number(localStorage.getItem('themeUpdatedAt') || 0);
            if (remote.updatedAt <= local) return; // 本地更新或相同：不回退
            // 应用远端
            if (remote.themeData) {
                safeSetItem('themeData', JSON.stringify(remote.themeData));
                if (remote.name) safeSetItem('themeName', remote.name); else safeRemoveItem('themeName');
                safeSetItem('themeKind', remote.kind || 'custom');
                if (remote.source) safeSetItem('themeSource', remote.source); else safeRemoveItem('themeSource');
                window.__applyThemeVars(remote.themeData, document.documentElement.classList.contains('dark'));
            } else {
                safeRemoveItem('themeData');
                safeRemoveItem('themeName');
                safeRemoveItem('themeKind');
                safeRemoveItem('themeSource');
                window.__applyThemeVars(null, document.documentElement.classList.contains('dark'));
            }
            safeSetItem('themeUpdatedAt', String(remote.updatedAt));
            safeSetItem('themePersonal', '0');
            if (typeof refreshThemeUI === 'function') refreshThemeUI();
        } catch (e) { /* 网络异常忽略 */ }
    }


    function restoreLastTheme() {
        const last = getLastSnapshot();
        if (!last) return;
        const current = snapshotCurrentTheme();
        saveLastSnapshot(current);
        setCardLoading(false);
        if (last.themeData) {
            applyThemeData({ data: last.themeData, name: last.themeName, kind: last.themeKind || 'custom', source: last.themeSource });
        } else {
            restoreSiteDefaultTheme();
            scheduleThemeSync();
        }
        const input = document.getElementById('theme-input');
        const src = getThemeMeta('themeSource', '');
        if (input) input.value = isInternalThemeSource(src) ? '' : src;
    }

    // —— 主题缓存 ——
    function getCacheKey(id) { return 'themeCache:' + id; }
    function cacheTheme(id, t) {
        try {
            const keys = [];
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.indexOf('themeCache:') === 0) keys.push(k);
            }
            if (keys.length >= 8) { const oldest = keys[0]; if (oldest) localStorage.removeItem(oldest); } // 超限时任删一条缓存防膨胀（key 顺序不保证严格按写入时间）
            localStorage.setItem(getCacheKey(id), JSON.stringify(t));
        } catch (e) { /* 忽略 */ }
    }
    function getCachedTheme(id) {
        try { return JSON.parse(localStorage.getItem(getCacheKey(id)) || 'null'); } catch (e) { return null; }
    }

    // —— 加载/错误状态控制 ——
    function setCardLoading(on, name) {
        document.querySelectorAll('.theme-card').forEach(c => c.classList.toggle('theme-card-disabled', !!on));
        activeThemeLoadP = on ? true : null;
        if (on) {
            const bar = document.getElementById('theme-status-bar');
            const txt = bar && bar.querySelector('span.truncate');
            if (txt) txt.textContent = '正在应用' + (name ? ' ' + name : '') + '…';
        } else {
            renderThemeStatusBar();
            renderThemeGrid();
        }
    }
    function setThemeError(msg) {
        const bar = document.getElementById('theme-status-bar');
        if (bar) {
            bar.innerHTML = '<div class="flex items-center justify-between gap-3 py-3 px-4 rounded-[var(--radius-xl)] bg-muted dark:bg-muted">' +
                '<span class="text-sm text-red-500">' + esc(msg) + '</span>' +
                '<button onclick="closeThemeDialog()" class="px-2.5 py-1.5 rounded-[var(--radius-xl)] text-xs font-medium text-accent hover:bg-secondary transition-colors shrink-0">确定</button>' +
                '</div>';
        }
    }
    function refreshThemeUI() {
        renderThemeStatusBar();
        renderThemeGrid();
    }
    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

    function themeStatus(msg, isError) {
        const el = document.getElementById('theme-status');
        if (!el) return;
        if (!msg) { el.textContent = ''; el.classList.add('hidden'); return; }
        el.textContent = msg;
        el.style.color = isError ? '#ef4444' : 'var(--muted-foreground)';
        el.classList.remove('hidden');
    }
    function openThemeDialog() {
        const input = document.getElementById('theme-input');
        const saved = getThemeMeta('themeSource', '');
        if (input) input.value = isInternalThemeSource(saved) ? '' : saved;
        const overlay = document.getElementById('theme-dialog-overlay');
        if (overlay) { overlay.classList.remove('hidden'); void overlay.offsetWidth; overlay.classList.remove('overlay-hidden'); overlay.classList.add('overlay-visible'); }
        const box = document.getElementById('theme-dialog-box');
        if (box) { box.classList.remove('dialog-scale-hidden'); box.classList.add('dialog-scale-visible'); }
        lockPageScroll();
        refreshThemeUI();
        themeStatus('', false);
    }
    function closeThemeDialog() {
        const overlay = document.getElementById('theme-dialog-overlay');
        if (overlay) { overlay.classList.remove('overlay-visible'); overlay.classList.add('overlay-hidden'); }
        const box = document.getElementById('theme-dialog-box');
        if (box) { box.classList.remove('dialog-scale-visible'); box.classList.add('dialog-scale-hidden'); }
        unlockPageScroll();
        setTimeout(() => { if (overlay && overlay.classList.contains('overlay-hidden')) overlay.classList.add('hidden'); }, 300);
    }

    // —— 自定义主题 JSON 导出 / 导入 ——
    const THEME_JSON_MAX = 256 * 1024; // 导入内容体积上限（文本与文件同标准）

    function setThemeJsonStatus(elId, msg, isError) {
        const el = document.getElementById(elId);
        if (!el) return;
        if (!msg) { el.classList.add('hidden'); return; }
        el.textContent = msg;
        el.style.color = isError ? '#ef4444' : 'var(--muted-foreground)';
        el.classList.remove('hidden');
    }

    function buildThemeExportJson() {
        const data = window.__getThemeData();
        if (!data) return null;
        const kind = getThemeKind();
        return JSON.stringify({
            type: 'cfile-theme',
            version: 1,
            name: getThemeName() || '自定义主题',
            kind: kind === 'builtin' ? 'builtin' : 'custom',
            data: data,
            exportedAt: Date.now()
        }, null, 2);
    }

    function openThemeExportDialog() {
        let json = null;
        try { json = buildThemeExportJson(); } catch (e) { /* 数据损坏按无主题处理 */ }
        if (!json) { setThemeJsonStatus('theme-json-entry-status', '当前是默认主题，暂无可导出的自定义主题', true); return; }
        setThemeJsonStatus('theme-json-entry-status', '', false);
        document.getElementById('theme-export-text').value = json;
        setThemeJsonStatus('theme-export-status', '', false);
        toggleOverlay('theme-export-overlay', true);
    }
    function closeThemeExportDialog() { toggleOverlay('theme-export-overlay', false); }

    function copyThemeJson() {
        const ta = document.getElementById('theme-export-text');
        const done = () => setThemeJsonStatus('theme-export-status', '已复制到剪贴板。', false);
        const fallback = () => {
            try { ta.removeAttribute('readonly'); ta.select(); document.execCommand('copy'); ta.setAttribute('readonly', ''); } catch (e) { /* 忽略 */ }
            setThemeJsonStatus('theme-export-status', '剪贴板不可用，已选中文本，可按 Ctrl/Cmd+C 手动复制。', true);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(ta.value).then(done, fallback);
        } else { fallback(); }
    }

    function downloadThemeJson() {
        const ta = document.getElementById('theme-export-text');
        if (!ta.value) { setThemeJsonStatus('theme-export-status', '没有可下载的内容', true); return; }
        try {
            let name = 'theme';
            try { name = (JSON.parse(ta.value).name || 'theme'); } catch (e) { /* 用默认名 */ }
            // 文件名清洗：去控制字符与非法文件名字符
            const _nm = String(name), _bad = [47, 92, 58, 42, 63, 34, 60, 62, 124];
            let _out = '';
            for (let _i = 0; _i < _nm.length; _i++) {
                const _c = _nm.charCodeAt(_i);
                if (_c < 32 || _c === 127 || _bad.indexOf(_c) >= 0) continue;
                _out += _nm[_i];
            }
            const safeName = _out.slice(0, 40) || 'theme';
            const blob = new Blob([ta.value], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = safeName + '_' + new Date().toISOString().split('T')[0] + '.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            setThemeJsonStatus('theme-export-status', '已下载：' + a.download, false);
        } catch (e) {
            setThemeJsonStatus('theme-export-status', '导出失败', true);
        }
    }

    // 导入子弹窗：两步确认状态机（0=待校验 1=等待覆盖确认）
    let _themeImportStage = 0;
    let _themeImportReady = null;

    function resetThemeImportStage() {
        _themeImportStage = 0;
        _themeImportReady = null;
        const btn = document.getElementById('theme-import-apply-btn');
        if (btn) {
            btn.textContent = '应用';
            btn.classList.remove('!text-red-600', 'dark:!text-red-400', '!bg-red-500/10');
        }
    }

    function openThemeImportDialog() {
        resetThemeImportStage();
        setThemeJsonStatus('theme-import-status', '', false);
        setThemeJsonStatus('theme-json-entry-status', '', false);
        toggleOverlay('theme-import-overlay', true);
    }
    function closeThemeImportDialog() {
        resetThemeImportStage();
        toggleOverlay('theme-import-overlay', false);
    }

    function pickThemeFile() {
        const fi = document.getElementById('theme-import-file');
        if (!fi) return;
        fi.value = '';
        fi.onchange = (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            if (file.size > THEME_JSON_MAX) {
                setThemeJsonStatus('theme-import-status', '文件过大（上限 256KB），请检查文件', true);
                return;
            }
            const reader = new FileReader();
            reader.onload = (ev) => {
                try {
                    document.getElementById('theme-import-text').value = String(ev.target.result || '');
                    resetThemeImportStage();
                    setThemeJsonStatus('theme-import-status', '文件已读取，请点击「应用」完成导入。', false);
                } catch (err) {
                    setThemeJsonStatus('theme-import-status', '文件读取异常', true);
                }
            };
            reader.onerror = () => setThemeJsonStatus('theme-import-status', '文件读取失败，请重试', true);
            reader.readAsText(file);
        };
        fi.click();
    }

    function applyThemeJsonFlow() {
        const btn = document.getElementById('theme-import-apply-btn');
        if (_themeImportStage === 1 && _themeImportReady) {
            const ready = _themeImportReady;
            resetThemeImportStage();
            try {
                saveLastSnapshot(snapshotCurrentTheme());
                applyThemeData({ data: ready.data, name: ready.name || '导入主题', kind: 'custom', source: 'json:' + (ready.name || 'import') });
                closeThemeImportDialog();
                setThemeJsonStatus('theme-json-entry-status', '主题导入成功（已保存，可点「回退上一套」撤销）。', false);
            } catch (e) {
                setThemeJsonStatus('theme-import-status', '应用主题失败：' + e.message, true);
            }
            return;
        }
        const text = (document.getElementById('theme-import-text').value || '').trim();
        if (!text) { setThemeJsonStatus('theme-import-status', '请先粘贴 JSON 或选择文件', true); return; }
        if (text.length > THEME_JSON_MAX) { setThemeJsonStatus('theme-import-status', '内容过大（上限 256KB）', true); return; }
        let parsed;
        try {
            parsed = JSON.parse(text);
        } catch (e) {
            setThemeJsonStatus('theme-import-status', 'JSON 格式无效，请检查内容', true);
            return;
        }
        let result;
        try {
            result = window.__sanitizeThemeData(parsed);
        } catch (e) {
            setThemeJsonStatus('theme-import-status', '主题数据校验失败', true);
            return;
        }
        if (!result || !result.data) {
            setThemeJsonStatus('theme-import-status', '文件中没有有效的主题变量（需包含 light 或 dark 色值）', true);
            return;
        }
        _themeImportReady = result;
        _themeImportStage = 1;
        if (btn) {
            btn.textContent = '确认覆盖导入';
            btn.classList.add('!text-red-600', 'dark:!text-red-400', '!bg-red-500/10');
        }
        setThemeJsonStatus('theme-import-status', '校验通过（共 ' + result.validCount + ' 个变量）。再次点击将覆盖当前主题。', false);
    }

    (function bindThemeImportReset() {
        const ta = document.getElementById('theme-import-text');
        if (ta) ta.addEventListener('input', () => {
            if (_themeImportStage === 1) {
                resetThemeImportStage();
                setThemeJsonStatus('theme-import-status', '', false);
            }
        });
    })();
    function extractThemeId(url) {
        const s = String(url || '').trim();
        if (!s) return null;
        const parts = s.split(/[?#]/)[0].split('/');
        const idx = parts.lastIndexOf('themes');
        const cand = idx >= 0 && parts[idx + 1] ? parts[idx + 1] : (parts.length === 1 ? parts[0] : '');
        const bare = (cand || '').trim();
        return /^[A-Za-z0-9_-]+$/.test(bare) ? bare : null;
    }

    async function fetchWithTimeout(url, ms) {
        const ctrl = new AbortController();
        const timer = setTimeout(function () { ctrl.abort(); }, ms || 8000);
        try {
            return await fetch(url, { signal: ctrl.signal });
        } finally {
            clearTimeout(timer);
        }
    }
    async function fetchTheme(id) {
        const cached = getCachedTheme(id);
        if (cached) return cached;
        const endpoints = ['/api/theme-proxy?id=' + encodeURIComponent(id),
                           'https://tweakcn.com/r/themes/' + encodeURIComponent(id)];
        for (const ep of endpoints) {
            try {
                const res = await fetchWithTimeout(ep);
                if (!res.ok) continue;
                const data = await res.json();
                const cssVars = data && data.cssVars;
                if (!cssVars) continue;
                const t = (cssVars.light || cssVars.dark) ? cssVars : (cssVars.theme || null);
                if (t) { if (data.name && !t.name) t.name = data.name; return t; }
            } catch (e) { /* 尝试下一个 */ }
        }
        throw new Error('无法获取主题，请检查链接或网络');
    }
    async function applyCustomTheme() {
        if (activeThemeLoadP) return;
        const input = document.getElementById('theme-input');
        const url = input ? input.value.trim() : '';
        const id = extractThemeId(url);
        themeStatus('正在加载主题...', false);
        if (!id) { themeStatus('链接无效，请提供 tweakcn 主题链接', true); return; }
        saveLastSnapshot(snapshotCurrentTheme());
        try {
            const t = await fetchTheme(id);
            const themeLayer = t.theme || {};
            const tLight = Object.assign({}, themeLayer, t.light || {});
            const tDark = Object.assign({}, themeLayer, t.dark || t.light || {});
            const themeData = { light: tLight, dark: tDark, theme: themeLayer, fonts: t.fonts || themeLayer.fonts || null };
            if (!Object.keys(themeData.light).length) throw new Error('主题数据为空');
            const builtin = BUILTIN_THEMES.find(b => b.id === id);
            cacheTheme(id, t);
            applyThemeData({ data: themeData, name: builtin ? builtin.name : (t.name || id), kind: builtin ? 'builtin' : 'custom', source: url });
            themeStatus('主题应用成功（已保存）。', false);
        } catch (e) {
            safeRemoveItem('lastTheme');
            themeStatus('主题应用失败：' + e.message + '，已保留原主题', true);
        }
    }
    function resetCustomTheme() {
        if (!window.__getThemeData() && !getThemeName()) { refreshThemeUI(); return; }
        saveLastSnapshot(snapshotCurrentTheme());
        restoreSiteDefaultTheme();
        themeStatus('已恢复默认配色。', false);
        scheduleThemeSync();
    }

    (function initThemeDialogClose() {
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;
            // 先关最上层子弹窗，没有子弹窗时才关主题弹窗
            const exportOv = document.getElementById('theme-export-overlay');
            if (exportOv && !exportOv.classList.contains('hidden')) { closeThemeExportDialog(); return; }
            const importOv = document.getElementById('theme-import-overlay');
            if (importOv && !importOv.classList.contains('hidden')) { closeThemeImportDialog(); return; }
            const ov = document.getElementById('theme-dialog-overlay');
            if (ov && !ov.classList.contains('overlay-hidden')) closeThemeDialog();
        });
    })();

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
             renderCategoryButtons();

             // 提示用户
             // logAction('进入编辑模式', {});
        } else {
             // 退出编辑模式
             isEditMode = false;
             updateUIState();
             renderCategories();
             renderCategoryButtons();
        }
    }
    
    async function toggleLogin() {
        if (!isLoggedIn) {
             document.getElementById('password-input').value = '';
             toggleOverlay('password-dialog-overlay', true);
             document.getElementById('totp-input').value = '';
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
        
        const linkCategory = link.category || (() => {
            for (const c in categories) if (categories[c].links.some(l => l.url === link.url)) return c;
            return '';
        })();
        document.getElementById('category-select-value').value = linkCategory;
        document.getElementById('category-select-text').textContent = linkCategory || '请选择分类';
        
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
                 body: JSON.stringify({password: pwd, totp: document.getElementById('totp-input').value})
             });
             const data = await res.json();
             if(data.valid) {
                 localStorage.setItem('authToken', data.token);
                 isLoggedIn = true;
                 document.getElementById('password-input').value = '';
                 toggleOverlay('password-dialog-overlay', false);
                 await loadLinks();
                 pullThemeFromKv();
                 await customAlert('登录成功');
             } else if (res.status === 429 && data.locked) {
                 await customAlertRateLimit(data.retryAfter || 900);
             } else {
                 var remMsg = (data && data.message) ? data.message : '密码错误';
                 var remaining = typeof data.remaining === 'number' ? data.remaining : 0;
                 if (remaining > 0) remMsg = remMsg + '，还可尝试 ' + remaining + ' 次';
                 await customAlert(remMsg);
             }
         } catch(e) { await customAlert('Login Error'); }
    }

    // 单飞刷新锁 —— 并发 401 只触发一次 /api/refreshToken
    let _refreshing = null;
    async function refreshOnce() {
        if (_refreshing) return _refreshing;
        _refreshing = (async () => {
            const r = await fetch('/api/refreshToken', { method: 'POST', credentials: 'include' });
            if (!r.ok) return null;
            const data = await r.json();
            return data && data.accessToken ? data.accessToken : null;
        })();
        try { return await _refreshing; }
        finally { _refreshing = null; }
    }

    async function fetchWithAuth(url, options = {}) {
        const token = localStorage.getItem('authToken');
        const headers = { ...(options.headers || {}) };
        // 无 token 时不拼 Authorization: null
        if (token) headers.Authorization = token;
        options.headers = headers;

        let res = await fetch(url, options);

        if (res.status === 401 && token) {
            try {
                const fresh = await refreshOnce();
                if (fresh) {
                    localStorage.setItem('authToken', fresh);
                    headers.Authorization = fresh;
                    options.headers = headers;
                    res = await fetch(url, options);
                } else {
                    throw new Error('Refresh token expired');
                }
            } catch (refreshError) {
                localStorage.removeItem('authToken');
                isLoggedIn = false;
                updateUIState();
                renderCategories();
                document.getElementById('password-input').value = '';
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

    function customConfirm(msg, okText = '确定', cancelText = '取消') {
        return new Promise(resolve => {
            toggleOverlay('custom-confirm-overlay', true);
            document.getElementById('custom-confirm-message').innerText = msg;
            const okBtn = document.getElementById('custom-confirm-ok');
            const cancelBtn = document.getElementById('custom-confirm-cancel');
            okBtn.innerText = okText;
            cancelBtn.innerText = cancelText;
            
            const close = (val) => {
                toggleOverlay('custom-confirm-overlay', false);
                document.getElementById('custom-confirm-ok').onclick = null;
                document.getElementById('custom-confirm-cancel').onclick = null;
                okBtn.innerText = '确定';
                cancelBtn.innerText = '取消';
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

    function customAlertRateLimit(seconds) {
        return new Promise(resolve => {
            const content = document.getElementById('custom-alert-content');
            toggleOverlay('custom-alert-overlay', true);
            const timer = setInterval(() => {
                if (seconds > 0) {
                    content.innerText = '登录已被限制，请' + seconds + '秒后再试';
                    seconds--;
                } else {
                    clearInterval(timer);
                    content.innerText = '已过限时，可重新尝试登录';
                }
            }, 1000);
            document.getElementById('custom-alert-confirm').onclick = () => {
                clearInterval(timer);
                toggleOverlay('custom-alert-overlay', false);
                resolve();
            }
        });
    }

    function setupTooltipDelegation() {
        const tooltip = document.getElementById('custom-tooltip');
        let activeTarget = null;

        document.body.addEventListener('mousemove', (e) => {
            const target = e.target.closest('.has-tooltip');

            if (target) {
                const text = target.getAttribute('data-tooltip');
                if (text) {
                    activeTarget = target;
                    showTooltip(e, text);
                } else {
                    hideTooltip();
                }
            } else {
                if (activeTarget) {
                    hideTooltip();
                    activeTarget = null;
                }
            }
        });

        window.addEventListener('scroll', hideTooltip, { passive: true });
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
        // 登出同时通知服务端吊销世代并清除 HttpOnly refresh cookie
        const t = localStorage.getItem('authToken');
        const clean = () => { localStorage.removeItem('authToken'); isLoggedIn = false; isEditMode = false; location.reload(); };
        fetch('/api/logout', {
            method: 'POST',
            credentials: 'include',
            headers: t ? { 'Authorization': t } : {}
        }).finally(clean);
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
    
    // 解析 Chrome / Edge 导出的 Netscape 书签 HTML
    function parseBookmarks(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // 清洗书签标题:按分隔符(|、英文/中文冒号 : ：、两边带可选空格的 -/–/—)拆分
        function cleanTitle(title) {
            const raw = (title || '').trim();

            if (!raw) {
                return { name: '', tips: '' };
            }

            // 1. 判断是否以 http:// 或 https:// 开头（整体是 URL）
            if (/^https?:\\/\\//i.test(raw)) {
                try {
                    const urlObj = new URL(raw);
                    const name = (urlObj.hostname + urlObj.pathname).replace(/\\/$/, '');
                    return { name: name || raw, tips: raw };
                } catch (e) {
                    return { name: raw, tips: raw };
                }
            }

            // 2. 正常文本标题拆分
            const sep = /[|:：]|\\s+[-–—]\\s+/;

            const idx = raw.search(sep);
            if (idx === -1) {
                return { name: raw, tips: raw };
            }

            const name = raw.slice(0, idx).trim();
            const tips = raw.slice(idx).replace(/^[\\s|:：–—-]+/, '').trim();

            return {
                name: name || raw,
                tips: tips || raw
            };
        }

        function getLinks(dl, catLabel, skipped) {
            const links = [];
            const dts = Array.from(dl.children).filter(e => e && e.tagName === 'DT');
            for (const dt of dts) {
                const a = dt.querySelector(':scope > a');
                if (!a) continue;
                const url = (a.getAttribute('href') || '').trim();
                const clean = cleanTitle(a.textContent);
                const why = importUrlRejectReason(url);
                if (why) {
                    if (skipped) skipped.push({ name: clean.name || url, url, category: catLabel, reason: why });
                    continue;
                }
                links.push({ name: clean.name, url, tips: clean.tips, icon: '', category: null, isPrivate: true });
            }
            return links;
        }

        // 解析结果写入局部对象，避免污染页面正在使用的全局 categories
        const parsedCats = {};
        const parsedSkipped = [];

        // 递归处理一个文件夹:子文件夹生成独立分类,当前文件夹的直接链接归入当前分类
        function processFolder(dl, catName) {
            const folderDts = Array.from(dl.children).filter(e => e && e.tagName === 'DT' && e.querySelector(':scope > dl'));
            for (const dt of folderDts) {
                const h3 = dt.querySelector(':scope > h3');
                const childDl = dt.querySelector(':scope > dl');
                const subName = h3 ? h3.textContent.trim() : '未分类';
                processFolder(childDl, subName);
            }
            const links = getLinks(dl, catName, parsedSkipped);
            if (catName && links.length) {
                if (!parsedCats[catName]) parsedCats[catName] = { isHidden: false, isPrivate: false, links: [] };
                links.forEach(l => { l.category = catName; parsedCats[catName].links.push(l); });
            }
        }

        const rootDl = doc.querySelector('dl');
        if (!rootDl) return null;

        const rootDts = Array.from(rootDl.children).filter(e => e && e.tagName === 'DT');
        for (const dt of rootDts) {
            const childDl = dt.querySelector(':scope > dl');
            const h3 = dt.querySelector(':scope > h3');
            if (childDl && h3) {
                processFolder(childDl, h3.textContent.trim());
            } else {
                const a = dt.querySelector(':scope > a');
                if (!a) continue;
                const url = (a.getAttribute('href') || '').trim();
                const clean = cleanTitle(a.textContent);
                const why = importUrlRejectReason(url);
                if (why) {
                    parsedSkipped.push({ name: clean.name || url, url, category: '未分类', reason: why });
                    continue;
                }
                if (!parsedCats['未分类']) parsedCats['未分类'] = { isHidden: false, isPrivate: false, links: [] };
                parsedCats['未分类'].links.push({ name: clean.name, url, tips: clean.tips, icon: '', category: '未分类', isPrivate: true });
            }
        }

        if (!Object.keys(parsedCats).length && !parsedSkipped.length) return null;
        return { categories: parsedCats, skipped: parsedSkipped };
    }

    // 合并导入：以现有数据为基础，导入新分类/链接（同名分类合并、按 URL 去重）
    // 书签协议白名单：与服务端 URL_SCHEME_OK 保持一致
    // 用 [/] 字符类而非 \/ —— HTML_CONTENT 是模板字面量，\/ 会被转义吃掉导致分隔符错位
    const IMPORT_URL_OK = /^https?:[/][/]/i;
    // 常见被跳过的协议 → 面向用户的原因说明
    const IMPORT_URL_SKIP_REASON = [
        [/^javascript:/i,  '脚本协议，出于安全考虑禁止导入'],
        [/^vbscript:/i,   '脚本协议，出于安全考虑禁止导入'],
        [/^data:/i,        'data 协议，出于安全考虑禁止导入'],
        [/^chrome:/i,      '浏览器内部页面（chrome://），在网站中无法打开'],
        [/^edge:/i,        '浏览器内部页面（edge://），在网站中无法打开'],
        [/^about:/i,       '浏览器内部页面（about://），在网站中无法打开'],
        [/^magnet:/i,      'BT 种子链接，不支持'],
        [/^file:/i,        '本地文件路径，不支持'],
        [/^ftp:/i,         'FTP 链接已停用'],
    ];

    // 判定一个 URL 是否可导入；不可导入时返回原因文案
    function importUrlRejectReason(url) {
        if (!url) return '空地址';
        if (IMPORT_URL_OK.test(url)) {
            try { new URL(url); } catch { return '地址格式不合法'; }
            return null;
        }
        for (const [re, why] of IMPORT_URL_SKIP_REASON) if (re.test(url)) return why;
        return '仅支持 http:// 或 https:// 开头的网址';
    }

    // 导入去重用的 URL 归一化键：忽略末尾斜杠、hash、协议与域名大小写
    // 让 https://a.com 与 https://a.com/ 被视为同一条
    function importUrlKey(u) {
        const raw = String(u == null ? '' : u).trim();
        if (!raw) return '';
        try {
            const url = new URL(raw);
            const path = url.pathname.replace(/[/]+$/, '');   // 同上：用 [/] 规避模板转义
            return (url.host.toLowerCase() + path + url.search).toLowerCase();
        } catch {
            return raw.toLowerCase();
        }
    }

    // 兼容 {名称:{links:[...]}} 与旧格式 {名称:[...]} 两种分类结构
    function catLinksOf(cat) {
        if (Array.isArray(cat)) return cat;
        return (cat && Array.isArray(cat.links)) ? cat.links : [];
    }

    // 返回 { categories, stats }；同名分类按 URL 归一化去重后追加
    function mergeImportData(currentCats, importedData) {
        const merged = {};
        const stats = { added: 0, dup: 0, newCats: 0, invalid: 0, touchedCats: 0 };

        Object.keys(currentCats || {}).forEach(key => {
            const cat = currentCats[key] || {};
            merged[key] = {
                isHidden: !!cat.isHidden,
                isPrivate: !!cat.isPrivate,
                links: catLinksOf(cat).slice()
            };
        });

        // 分类名去空白索引：避免 "test" 与 "test " 被当成两个分类
        const nameIndex = new Map();
        Object.keys(merged).forEach(k => nameIndex.set(k.trim().toLowerCase(), k));

        const importedCats = (importedData && importedData.categories) || {};
        Object.keys(importedCats).forEach(rawName => {
            const importedLinks = catLinksOf(importedCats[rawName]);

            // 归一化分类名，命中已有分类则并入，否则新建
            let catName = rawName;
            const hit = nameIndex.get(rawName.trim().toLowerCase());
            if (hit !== undefined) {
                catName = hit;
            } else {
                nameIndex.set(catName.trim().toLowerCase(), catName);
                merged[catName] = { isHidden: false, isPrivate: false, links: [] };
                stats.newCats++;
            }

            const existingKeys = new Set(merged[catName].links.map(l => importUrlKey(l.url)));
            let catTouched = false;
            importedLinks.forEach(link => {
                if (!link || typeof link !== 'object' || !link.url) { stats.invalid++; return; }
                const key = importUrlKey(link.url);
                if (!key) { stats.invalid++; return; }
                if (existingKeys.has(key)) { stats.dup++; return; }
                merged[catName].links.push({ ...link, category: catName, isPrivate: true });
                existingKeys.add(key);
                stats.added++;
                catTouched = true;
            });
            if (catTouched) stats.touchedCats++;
        });

        return { categories: merged, stats };
    }

    async function importData() {
        if(!await validateTokenOrRedirect()) return;
        
        const fileInput = document.getElementById('import-file-input');
        fileInput.value = '';
        
        fileInput.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            try {
                const reader = new FileReader();
                reader.onload = async (event) => {
                    try {
                        const content = event.target.result;
                        const trimmed = content.trimStart();
                        let data, skipped = [];
                        if (trimmed.startsWith('<!DOCTYPE') || /<(DL|H3)\b/i.test(trimmed)) {
                            // Chrome / Edge 书签 HTML
                            data = parseBookmarks(content);
                            if (!data) throw new Error("No valid bookmarks found");
                            skipped = data.skipped || [];
                        } else {
                            // 本项目导出的 JSON 配置
                            data = JSON.parse(content);
                            if (typeof data !== 'object' || data === null) throw new Error("Invalid JSON");
                        }
                        // 导入的所有链接默认设为私密(仅登录可见)
                        if (data && data.categories) {
                            for (const catObj of Object.values(data.categories)) {
                                for (const link of catLinksOf(catObj)) {
                                    if (link) link.isPrivate = true;
                                }
                            }
                        }
                        // 预检：按协议白名单过滤，剔除导入数据里打不开的链接
                        const rejected = [];
                        if (data && data.categories) {
                            const keptCats = {};
                            for (const [cname, catObj] of Object.entries(data.categories)) {
                                const kept = [];
                                for (const link of catLinksOf(catObj)) {
                                    const why = link ? importUrlRejectReason(link.url) : '数据格式错误';
                                    if (why) rejected.push({ name: (link && link.name) || '(无名称)', url: (link && link.url) || '', category: cname, reason: why });
                                    else kept.push(link);
                                }
                                if (kept.length || !rejected.some(r => r.category === cname)) {
                                    keptCats[cname] = (catObj && !Array.isArray(catObj))
                                        ? { ...catObj, links: kept }
                                        : kept;
                                }
                            }
                            data = { ...data, categories: keptCats };
                        }
                        const allSkipped = skipped.concat(rejected);

                        // 导入前先告知会被跳过的条目，避免"看起来成功了其实没导进去"
                        if (allSkipped.length) {
                            const preview = allSkipped.slice(0, 8).map(s =>
                                '· ' + s.name + '\\n   ' + String(s.url || '(空)').slice(0, 90) + '\\n   原因：' + s.reason).join('\\n');
                            const more = allSkipped.length > 8 ? '\\n……另有 ' + (allSkipped.length - 8) + ' 条同类' : '';
                            const go = await customConfirm(
                                '检测到 ' + allSkipped.length + ' 条书签无法导入：\\n\\n' + preview + more + '\\n\\n这些书签会被跳过，其余内容继续导入。是否继续？',
                                '继续导入', '取消导入'
                            );
                            if (!go) { await customAlert('已取消导入'); return; }
                        }

                        // 选择导入方式：合并 or 覆盖
                        const mergeMode = await customConfirm(
                            '请选择导入方式：\\n\\n【合并】保留现有分类与链接，导入内容追加进去（同名分类按 URL 去重合并）\\n\\n【覆盖】清空现有全部数据，仅保留本次导入内容',
                            '合并导入', '覆盖导入'
                        );
                        let payload = data, stats = null;
                        if (mergeMode) {
                            const r = mergeImportData(categories, data);
                            payload = { categories: r.categories };
                            stats = r.stats;
                        } else {
                            let n = 0;
                            for (const c of Object.values(data.categories || {})) n += catLinksOf(c).length;
                            stats = { added: n, dup: 0, newCats: Object.keys(data.categories || {}).length, invalid: 0, touchedCats: Object.keys(data.categories || {}).length };
                        }
                        const res = await fetchWithAuth("/api/importData", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(payload)
                        });
                        if (res.status === 401) {
                            logout();
                            await customAlert('登录凭证已过期，请重新登录');
                            return;
                        }
                        if (!res.ok) {
                            // 透出服务端真实原因，不再一律报"文件格式错误"
                            let detail = '';
                            try { const j = await res.json(); detail = (j && (j.detail || j.error)) || ''; } catch (_) {}
                            throw new Error('HTTP ' + res.status + (detail ? ' ' + detail : ''));
                        }
                        const parts = [mergeMode ? '合并导入' : '覆盖导入', '成功', '新增 ' + stats.added + ' 条'];
                        if (stats.dup) parts.push('跳过重复 ' + stats.dup + ' 条');
                        if (stats.newCats) parts.push('新建分类 ' + stats.newCats + ' 个');
                        if (allSkipped.length) parts.push('无法导入 ' + allSkipped.length + ' 条');
                        await customAlert(parts.join('，') + '！');
                        // 原地重新拉取，而不是 location.reload()：
                        // reload 会触发「关闭页面前确认」，用户一旦选择留在本页，
                        // 界面就停留在导入前的旧数据上，看起来像导入失败（其实已存成功）
                        await loadLinks(true);
                    } catch (error) {
                        console.error("导入失败:", error);
                        const msg = String((error && error.message) || '');
                        if (/^HTTP \d/.test(msg)) {
                            await customAlert('导入被服务端拒绝：' + msg + '\\n\\n常见原因：链接数超限、分类数超限、名称或地址超长、存在非法链接。');
                        } else {
                            await customAlert('文件解析失败：' + msg + '\\n\\n请确认是本应用导出的 JSON 或浏览器书签 HTML。');
                        }
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

// 配置默认值
let DEFAULT_USER = 'testUser';
let ICON_API = 'https://api.xinac.net/icon/?url=';
let PREFER_ICON_API = true;

function resolveConfig(env) {
    if (env.DEFAULT_USER) DEFAULT_USER = env.DEFAULT_USER;
    if (env.ICON_API) ICON_API = env.ICON_API;
    if (env.PREFER_ICON_API !== undefined) PREFER_ICON_API = env.PREFER_ICON_API === 'true';
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

        if (!(await timingSafeStringEqual(signature, expectedSig))) return null;

        const payloadStr = base64UrlDecode(payloadEncoded);
        return JSON.parse(payloadStr);
    } catch (e) {
        return null;
    }
}

let _tseKey = null;
async function timingSafeStringEqual(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') return false;
    if (!_tseKey) {
        _tseKey = await crypto.subtle.importKey(
            'raw', new TextEncoder().encode('cfile-tse-fixed-key-v1'),
            { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
        );
    }
    const [ha, hb] = await Promise.all([
        crypto.subtle.sign('HMAC', _tseKey, new TextEncoder().encode(a)),
        crypto.subtle.sign('HMAC', _tseKey, new TextEncoder().encode(b)),
    ]);
    const ua = new Uint8Array(ha);
    const ub = new Uint8Array(hb);
    if (ua.length !== ub.length) return false;
    let diff = 0;
    for (let i = 0; i < ua.length; i++) diff |= ua[i] ^ ub[i];
    return diff === 0;
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

    const gen = await currentKeyGen(env);

    if (!payload.kid || payload.kid !== gen) {
        return { isValid: false, status: 401, response: { error: 'Revoked', message: '会话已失效，请重新登录' } };
    }

    return { isValid: true, payload };
}

let _genCache = { value: null, expireAt: 0 };
async function currentKeyGen(env) {
    const now = Date.now();
    if (_genCache.value !== null && _genCache.expireAt > now) return _genCache.value;
    let v = null;
    try { v = await env.CARD_ORDER.get('__keygen__', 'text'); } catch (e) { console.warn('keygen read failed', e); }
    _genCache = { value: (v || '1'), expireAt: now + 60_000 };
    return _genCache.value;
}
async function bumpKeyGen(env) {
    try {
        const gen = String(Number((await currentKeyGen(env)) || '1') + 1);
        _genCache = { value: gen, expireAt: Date.now() + 60_000 };
        await env.CARD_ORDER.put('__keygen__', gen);
        return gen;
    } catch (e) {
        console.warn('keygen bump failed', e);
        return null;
    }
}

const CACHE = caches.default;
let _revCache = { value: null, expireAt: 0 };

async function getDataRev(env) {
    const now = Date.now();
    if (_revCache.value !== null && _revCache.expireAt > now) return _revCache.value;
    let rev = '0';
    try {
        rev = (await env.CARD_ORDER.get('__rev__', 'text')) || '0';
    } catch (e) { console.warn('rev read failed:', e); }
    _revCache = { value: rev, expireAt: now + 60_000 };
    return rev;
}

async function bumpRev(env) {
    const rev = String(Date.now());
    _revCache = { value: rev, expireAt: Date.now() + 60_000 };
    try { await env.CARD_ORDER.put('__rev__', rev); return rev; }
    catch (e) { console.warn('rev bump failed', e); return rev; }
}

function cacheKeyFor(url, rev, scope) {
    const k = new URL(url);
    k.searchParams.set('__v', rev);        // 版本失效维度
    k.searchParams.set('__s', scope);      // 鉴权维度
    return new Request(k.toString(), { method: 'GET' });
}

function ctxSafePut(key, res) {
    try { caches.default.put(key, res).catch(e => console.warn('cache put failed', e)); }
    catch (e) { console.warn('cache put failed', e); }
}

async function sendCached(body, request, cacheKey, cacheable, extraHeaders = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...extraHeaders,
        // 响应头一律 no-store：避免 CDN/浏览器按裸 URL 缓存公开数据，否则登录后带
        // Authorization 请求同一 URL 会命中这份匿名缓存，拿到过滤后数据、污染登录态的
        'Cache-Control': 'no-store',
        'Vary': 'Accept-Encoding',
    };
    const res = new Response(body, { status: 200, headers });
    if (cacheable) ctxSafePut(cacheKey, res.clone());
    return res;
}

async function handleGetTheme(request, env) {
    const theme = await getPublishedTheme(env);
    return new Response(JSON.stringify({ ok: true, theme }), { status: 200, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' } });
}

function sanitizeThemeVars(v) {
    if (!v || typeof v !== 'object') return null;
    const out = {};
    let n = 0;
    for (const k in v) {
        if (typeof k !== 'string' || k.length > 40) continue;
        const val = v[k];
        if (typeof val !== 'string' || val.length === 0 || val.length > 64) continue;
        out[k] = val;
        if (++n > 200) break;
    }
    return Object.keys(out).length ? out : null;
}
function sanitizeThemeData(td) {
    if (!td || typeof td !== 'object') return null;
    const light = sanitizeThemeVars(td.light);
    const dark = sanitizeThemeVars(td.dark);
    if (!light && !dark) return null;
    const res = { light: light || dark, dark: dark || light };
    const theme = sanitizeThemeVars(td.theme);
    if (theme) res.theme = theme;
    if (typeof td.fonts === 'string') res.fonts = td.fonts.slice(0, 128);
    return res;
}
async function handleSaveTheme(request, env) {
    const v = await validateServerToken(request.headers.get('Authorization'), env);
    if (!v.isValid) return new Response(JSON.stringify(v.response), { status: v.status, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
    const body = await readJsonBody(request, 40 * 1024);
    if (!body.ok) return new Response(JSON.stringify({ error: body.reason }), { status: body.reason === 'TOO_LARGE' ? 413 : 400, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
    const b = body.data || {};

    let themeData = null;
    if (b.themeData != null) {
        themeData = sanitizeThemeData(b.themeData);
        if (!themeData) return new Response(JSON.stringify({ error: 'INVALID_THEME' }), { status: 422, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
    }
    const rec = {
        themeData,
        name: typeof b.name === 'string' ? b.name.slice(0, 80) : '',
        kind: ['builtin', 'custom', 'ai', 'default'].indexOf(b.kind) >= 0 ? b.kind : 'custom',
        source: typeof b.source === 'string' ? b.source.slice(0, 500) : '',
        updatedAt: Date.now(),
    };
    try {
        await env.CARD_ORDER.put(DEFAULT_USER + ':theme', JSON.stringify(rec));
    } catch (e) {
        return new Response(JSON.stringify({ error: 'KV_WRITE_FAILED' }), { status: 500, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
    }

    const oldRev = (_pubThemeMemo.value && _pubThemeMemo.value.updatedAt) || 0;
    try {
        const origin = new URL(request.url).origin;
        await Promise.all([
            caches.default.delete(new Request(origin + '/?tr=' + oldRev, { method: 'GET' })),
            caches.default.delete(new Request(origin + '/', { method: 'GET' })), // 清理旧版无 rev 的 key
        ]);
    } catch (e) { console.warn('theme cache purge failed', e); }
    _pubThemeMemo.expireAt = 0; // 失效 isolate 缓存，站长即时可见
    return new Response(JSON.stringify({ ok: true, updatedAt: rec.updatedAt }), { status: 200, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
}

// —— 发布主题注入 ——
const _pubThemeMemo = { value: null, expireAt: 0 };
async function getPublishedTheme(env) {
    const now = Date.now();
    if (_pubThemeMemo.expireAt > now) return _pubThemeMemo.value;
    let theme = null;
    try {
        const raw = await env.CARD_ORDER.get(DEFAULT_USER + ':theme');
        if (raw) theme = JSON.parse(raw);
    } catch (e) { theme = null; }
    _pubThemeMemo.value = theme;
    _pubThemeMemo.expireAt = now + 5000; 
    return theme;
}

function jsonForScript(obj) {
    return JSON.stringify(obj)
        .replace(/</g, '\\u003C')
        .replace(/>/g, '\\u003E')
        .replace(/&/g, '\\u0026')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');
}
function themeToJsLiteral(theme) {
    if (!theme) return 'null';
    return jsonForScript({
        data: theme.themeData || null,
        name: theme.name || '',
        kind: theme.kind || '',
        source: theme.source || '',
        updatedAt: theme.updatedAt || 0,
    });
}
async function buildHtml(theme) {
    const body = HTML_CONTENT.split('"__NAV_PUBLISHED_THEME__"').join(themeToJsLiteral(theme));
    const buf = await new Response(body).arrayBuffer();
    const digest = await crypto.subtle.digest('SHA-256', buf);
    const etag = '"' + base64UrlEncodeUint8(new Uint8Array(digest)).slice(0, 32) + '"';
    return { etag, body };
}

function normalizeCategories(categories) {
    for (const key in categories) {
        if (Array.isArray(categories[key])) {
            categories[key] = { isHidden: false, isPrivate: false, links: categories[key] };
        }
    }
    return categories;
}

async function readLinksKv(env) {
    let dataStr = null;
    try {
        dataStr = await env.CARD_ORDER.get(DEFAULT_USER);
    } catch (e) {
        console.error('KV read failed:', e);
    }
    const { data } = safeJsonParse(dataStr, EMPTY_DATA);
    if (data) data.categories = normalizeCategories(data.categories || {});
    return data;
}

function filterPublic(categories) {
    const out = {};
    for (const name in categories) {
        const cat = categories[name];
        if (cat && (cat.isHidden || cat.isPrivate)) continue;
        const publicLinks = (cat && Array.isArray(cat.links) ? cat.links : []).filter(l => !l.isPrivate);
        if (publicLinks.length > 0) out[name] = { ...(cat || {}), links: publicLinks };
    }
    return out;
}

function corsHeaders(request, env) {
    const list = env && env.ALLOWED_ORIGINS ? env.ALLOWED_ORIGINS.split(',').filter(Boolean) : [];
    const origin = request ? request.headers.get('Origin') : null;
    if (!origin || !list.includes(origin)) return {};
    return {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': 'true',
        'Vary': 'Origin',
    };
}

const FETCH_ICON_MAX_HTML = 1 * 1024 * 1024; 
async function fetchBestIcon(targetUrl) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    };

    let u;
    try { u = new URL(targetUrl); } catch { console.warn('icon local: bad url'); return null; }
    if (!ICON_SCHEME_OK.has(u.protocol) || HOST_DENY.test(u.hostname)) {
        console.warn('icon local: blocked', u.hostname);
        return null;
    }

    const scoreCandidate = (c) =>
        (c.apple ? 2 : 0) +
        (c.size >= 180 ? 3 : c.size >= 96 ? 2 : c.size > 0 ? 1 : 0) +
        (/^image\/(png|jpeg|svg\+xml)$/.test(c.type) ? 1 : 0);

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    try {
        const response = await fetch(targetUrl, {
            headers: headers,
            redirect: 'follow',
            signal: ctrl.signal
        });
        if (!response.ok) return null;

        const candidates = [];
        const seen = new Set();
        let headDone = false;
        const rewriter = new HTMLRewriter()
            .on('link', {
                element(e) {
                    const words = (e.getAttribute('rel') || '').toLowerCase().split(/\s+/);
                    const apple = words.includes('apple-touch-icon');
                    if (!apple && !words.includes('icon')) return;
                    const h = e.getAttribute('href');
                    if (!h) return;
                    let abs;
                    try { abs = new URL(h, targetUrl).toString(); } catch { return; }
                    if (seen.has(abs)) return;
                    seen.add(abs);
                    let size = 0;
                    for (const m of (e.getAttribute('sizes') || '').matchAll(/(\d+)x(\d+)/g)) {
                        size = Math.max(size, Number(m[1]), Number(m[2]));
                    }
                    candidates.push({ url: abs, apple, size, type: (e.getAttribute('type') || '').toLowerCase() });
                },
            })
            .on('head', {
                endTag() { headDone = true; },
            });

        const reader = rewriter.transform(response).body.getReader();
        let total = 0;
        try {
            for (;;) {
                const { done, value } = await reader.read();
                if (done) break;
                total += value ? value.byteLength : 0;
                if (headDone || total > FETCH_ICON_MAX_HTML) break;
            }
        } catch {
        } finally {
            try { await reader.cancel(); } catch { }
            clearTimeout(timer);
        }

        candidates.sort((a, b) => scoreCandidate(b) - scoreCandidate(a));
        const urls = [];
        const pushUrl = (x) => { if (!urls.includes(x)) urls.push(x); };
        candidates.slice(0, 3).forEach((c) => pushUrl(c.url));
        pushUrl(new URL('/favicon.ico', targetUrl).toString());
        pushUrl(new URL('/favicon.svg', targetUrl).toString());
        const deadline = Date.now() + 4000;
        for (const iconUrl of urls) {
            const ms = Math.min(1500, deadline - Date.now());
            if (ms <= 0) break;
            const res = await safeFetchIcon(iconUrl, ms, true);
            if (res) return res;
        }
        return null;
    } catch (e) {
        // console.warn('icon local failed', e && e.message);
        return null;
    } finally {
        clearTimeout(timer);
    }
}

const ICON_SCHEME_OK = new Set(['http:', 'https:']);
const HOST_DENY = /(^|\.)(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|metadata\.google|i-1\.internal)/i;
// 只接受位图，绝不放行 HTML/SVG/XML。SVG 仅对「可信图床」放行（见 safeFetchIcon 的 allowSvg）
const ICON_CT_OK = /^image\/(png|jpeg|gif|webp|ico|x-icon|vnd\.microsoft\.icon|avif|bmp)/i;

async function safeFetchIcon(target, ms = 3500, allowSvg = false) {
    let u;
    try { u = new URL(target); } catch { return null; }
    if (!ICON_SCHEME_OK.has(u.protocol)) return null;
    if (HOST_DENY.test(u.hostname)) return null;

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
        const res = await fetch(u.toString(), {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
            redirect: 'follow',
            signal: ctrl.signal,
        });
        if (!res.ok) return null;
        const ct = (res.headers.get('content-type') || '').toLowerCase();
        if (allowSvg) {
            if (!ICON_CT_OK.test(ct) && ct !== 'image/svg+xml') return null;
        } else if (!ICON_CT_OK.test(ct)) {
            return null;
        }
        return res;
    } catch (e) {
        // console.warn('icon fetch failed', e && e.name);
        return null;
    } finally {
        clearTimeout(timer);
    }
}

async function handleThemeProxy(request, ctx) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) return new Response(JSON.stringify({ error: 'Missing id' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });

    const targetUrl = 'https://tweakcn.com/r/themes/' + encodeURIComponent(id);

    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;
    let response = await cache.match(cacheKey);

    if (response) {
        response = new Response(response.body, response);
        response.headers.set('X-Theme-Cache-Status', 'HIT');
        return response;
    }

    try {
        const upstream = await fetch(targetUrl, {
            headers: { 'Accept': 'application/json', 'User-Agent': 'tweakcn-theme-proxy/1.0' },
        });
        if (!upstream.ok) {
            return new Response(JSON.stringify({ error: 'upstream ' + upstream.status }), {
                status: upstream.status,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            });
        }
        const body = await upstream.text();
        response = new Response(body, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=300, s-maxage=300',
                'Access-Control-Allow-Origin': '*',
                'X-Theme-Cache-Status': 'MISS',
            },
        });
        ctx.waitUntil(cache.put(cacheKey, response.clone()).catch(e => console.warn('theme cache put failed', e)));
        return response;
    } catch (e) {
        return new Response(JSON.stringify({ error: 'failed to fetch theme: ' + e.message }), {
            status: 502,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
    }
}

async function handleIconProxy(request, ctx) {
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');

    if (!targetUrl) return new Response('Missing URL', { status: 400 });

    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;
    
    let response = await cache.match(cacheKey);

    const buildResp = (body, extraHeaders = {}) => new Response(body, {
        status: 200,
        headers: {
            'Content-Type': 'image/png',
            'X-Content-Type-Options': 'nosniff',
            'Content-Security-Policy': "default-src 'none'; sandbox",
            'Content-Disposition': 'inline; filename="icon"',
            'Referrer-Policy': 'no-referrer',
            'Cross-Origin-Resource-Policy': 'same-origin',
            ...extraHeaders,
        }
    });
    // 对已通过 safeFetchIcon 白名单(位图/SVG)的上游 Response，按其真实类型返回。
    const buildRespFromUpstream = (upstream, extraHeaders = {}) => {
        const rawCt = (upstream.headers.get('content-type') || '').toLowerCase();
        const ct = rawCt === 'image/svg+xml' ? 'image/svg+xml' : 'image/png';
        return buildResp(upstream.body, { 'Content-Type': ct, ...extraHeaders });
    };
    if (response) {
        response = new Response(response.body, response);
        response.headers.set('X-Icon-Cache-Status', 'HIT');
    } else {
        let upstreamResponse = null;
        if (PREFER_ICON_API) {
            const upstreamApi = `${ICON_API}${encodeURIComponent(targetUrl)}`;
            upstreamResponse = await safeFetchIcon(upstreamApi, 3500, true);
            if (!upstreamResponse) {
                upstreamResponse = await safeFetchIcon(new URL('/favicon.ico', targetUrl).toString(), 3500);
                if (!upstreamResponse) {
                    upstreamResponse = await fetchBestIcon(targetUrl);
                }
            }
        } else {
            upstreamResponse = await safeFetchIcon(new URL('/favicon.ico', targetUrl).toString(), 3500);
            if (!upstreamResponse) {
                upstreamResponse = await fetchBestIcon(targetUrl);
            }
        }
        if (upstreamResponse) {
            response = buildRespFromUpstream(upstreamResponse, {
                'Cache-Control': 'public, max-age=604800, s-maxage=604800, immutable',
                'Access-Control-Allow-Origin': '*',
                'X-Icon-Cache-Status': 'MISS',
            });
            ctx.waitUntil(cache.put(cacheKey, response.clone()));
        } else {
            const fallbackSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="display:block;width:100%;height:100%"><rect width="64" height="64" fill="white"/><path fill="black" d="M62 32C62 15.432 48.568 2 32 2C15.861 2 2.703 14.746 2.031 30.72c-.008.196-.01.395-.014.592c-.005.23-.017.458-.017.688v.101C2 48.614 15.432 62 32 62s30-13.386 30-29.899l-.002-.049zM37.99 59.351c-.525-.285-1.029-.752-1.234-1.388c-.371-1.152-.084-2.046.342-3.086c.34-.833-.117-1.795.109-2.667c.441-1.697.973-3.536.809-5.359c-.102-1.119-.35-1.17-1.178-1.816c-.873-.685-.873-1.654-1.457-2.52c-.529-.787.895-3.777.498-3.959c-.445-.205-1.457.063-1.777-.362c-.344-.458-.584-.999-1.057-1.354c-.305-.229-1.654-.995-2.014-.941c-1.813.271-3.777-1.497-4.934-2.65c-.797-.791-1.129-1.678-1.713-2.593c-.494-.775-1.242-.842-1.609-1.803c-.385-1.004-.156-2.29-.273-3.346c-.127-1.135-.691-1.497-1.396-2.365c-1.508-1.863-2.063-4.643-4.924-4.643c-1.537 0-1.428 3.348-2.666 2.899c-1.4-.507-3.566 1.891-3.535 1.568c.164-1.674 1.883-2.488 2.051-2.987c.549-1.638-2.453-1.246-2.068-2.612c.188-.672 2.098-1.161 1.703-1.562c-.119-.122-1.58-1.147-1.508-1.198c.271-.19 1.449.412 1.193-.37c-.086-.26-.225-.499-.357-.74a28 28 0 0 1 1.92-1.975c1.014-.083 2.066-.02 2.447.054c2.416.476 3.256 1.699 5.672.794c1.162-.434 5.445.319 6.059 1.537c.334.666 1.578-.403 2.063-.475c.52-.078 1.695.723 2.053.232c.943-1.291-.604-1.827 1.223-.833c1.225.667 3.619-2.266 2.861 1.181c-.547 2.485-2.557 2.54-4.031 4.159c-1.451 1.594 2.871 2.028 2.982 3.468c.32 4.146 2.531-.338 1.939-1.812c-1.145-2.855 1.303-2.071 2.289-.257c.547 1.007.963.159 1.633-.192c.543-.283.688 1.25.805 1.517c.385.887 1.65 1.152 1.436 2.294c-.238 1.259-1.133.881-2.008 1.094c-.977.237.158 1.059.016 1.359c-.154.328-1.332.464-1.646.65c-.924.544-.359 1.605-1.082 2.175c-.496.392-.996.137-1.092.871c-.113.865-1.707 1.143-1.5 1.97c.057.227.516 1.923.227 2.013c-.133.043-1.184-1.475-1.471-1.627c-.568-.301-3.15-.055-3.482 1.654c-.215 1.105 1.563 2.85 2.016 1.328c.561-1.873.828 1.091.693 1.207c.268.234 1.836-.385 1.371.7c-.197.459.193 1.656.889 1.287c.291-.154 1.041.31 1.172.061a2.14 2.14 0 0 1 .742-.692c.701-.41 1.75-.025 2.518.02c.469.027 4.313 2.124 4.334 2.545c.084 1.575 2.99 1.37 3.436 1.933c1.199 1.526.83.751-.045 2.706c-.441.984-.057 2.191-1.125 2.904c-.514.342-1.141.171-1.598.655c-.412.437-.25.959-.5 1.464c-.301.601-4.346 4.236-4.613 5.115c-.133.441-1.34.825-.322 1.248c.592.174-1.311 1.973-.396 2.718c.223.181.369.334.479.471c-.457.122-.91.233-1.369.333M35.594 4.237c-.039.145.02.316.271.483c.566.375-.162 1.208-.943.671c-.779-.537-2.531.241-2.41.644c.119.403.66.563 1.496.242c.834-.322 1.178.048 1.318.43c.096.259 0 .403-.027.752c-.025.349-.996.107-1.803.162c-.809.054-1.67-.162-1.645-.619c.027-.456-.861-1.289-1.391-1.637c-.529-.348.232-1.1.934-.537c.699.564.727-.107 1.535-.321c.459-.122.275-.305.119-.479q1.29.047 2.546.209m3.517 8.869c.605.164 1.656.929 1.656 1.291c0 .363-.477.817-.688.765c-1.523-.371-2.807-1.874-3.514-2.697c-1.234-1.435-1.156-.205-3.111-.826c-.5-.16-1.293-1.711-.768-2.476s1.131-.886 1.615-.683c.484.2 1.898-.645 2.223.362c.322 1.007 1.211 2.292 2.02 2.636c.81.342-.04 1.464.567 1.628m.485 4.673c.242.483-1.455-.564-1.859-1.047c-.402-.482-1.01-1.571-.523-2.054c.484-.482 1.57 1.005 2.141 1.33c1.129.645-.001 1.289.241 1.771m-8.594-7.315c.117-.161.365.242.586.645s-.084.971-.586.885c-.502-.084-.281-1.136 0-1.53m0-4.052s.473 1.154 0 .966s-.496-.671 0-.966m.096 3.65c-.135-.321-.166-1.64.162-2.04c.484-.59 1.266.564.74 1.02c-.525.457-.768 1.343-.902 1.02m-6.077 1.415c-.879-.063-.898-.823-1.02-1.226s-.85.765-1.586 0s.172-1.771.01-2.376c-.162-.604 1.736 0 2.02 0s1.051 1.248 1.252 1.227c.203-.02 1.293.987 1.293.584c0-.402.166-1.088.93-1.168c1.172-.121.121 1.289.08 1.838c-.039.549.891 1.504 1.232 1.907c.344.403-.867.686-1.07.443c-.201-.242-.727 0-1.172.322c-.443.322-1.656-.443-2.221-.685c-.566-.241 1.131-.804.252-.866m3.141-6.354c.781.269 1.225.51 1.609 0c.371-.492.654 1.073.385 1.502c-.27.431-.781.324-.863 0c-.08-.32-1.912-1.771-1.131-1.502m1.131 4.859c-.268-.35-.295-.752 0-1.047c.297-.295.201-.644.729-.751c.26-.054.295.348.295.724s.324.859 0 1.448c-.323.589-.754-.026-1.024-.374m2.205-5.969c-.012.074-.061.118-.184.106a.6.6 0 0 1-.236-.095q.21-.008.42-.011M25.389 5.15c.619 0 .539.418 1.051.719c.512.3.242-1.552.592-.854c.35.697 1.389 1.664.889 1.851c-.43.163-2.234.859-2.396.739s-.377-.63-.809-.739c-.432-.107-.889-1.127-1.186-1.1c-.113.01-.123-.184-.049-.442a28 28 0 0 1 1.572-.455c.058.158.146.281.336.281m13.519 30.025c-.645.666-1.756-.464-2.523-.424s-1.152-.765-1.818-.684c-.668.079.182-.847 1.111-.362c.927.483 3.756.925 3.23 1.47m12.93-22.934c-.188.24-.402.408-.607.585c-.605.524-1.736.484-1.898.846s-.566 1.489-1.98 1.494s-1.01 2.131-1.131 2.738s-.443 1.325-.848.801s-.566-.323-1.816-1.853s-.77-2.375-.365-2.818c.404-.442.566-1.49 0-1.329s-.889-.202-.768-.703s.727-.867 0-1.402s-.324-2.445-.889-4.189c-.566-1.745-1.334-.51-2.586-.443s-1.455-.873-.889-1.303a27.95 27.95 0 0 1 13.777 7.576"/></svg>';
            response = new Response(fallbackSvg, {
                status: 200,
                headers: {
                    'Content-Type': 'image/svg+xml',
                    'Cache-Control': 'public, max-age=604800, s-maxage=604800, immutable',
                    'Access-Control-Allow-Origin': '*',
                    'X-Icon-Cache-Status': 'DEFAULT',
                    'Cross-Origin-Resource-Policy': 'same-origin',
                },
            });
        }
    }

    return response;
}

const MIN_BACKUP_INTERVAL_MS = 10 * 60 * 1000; 

async function handleSmartBackup(env, currentData) {
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

            if (keys.length >= 10) { 
                const deleteCount = keys.length + 1 - 10;
                if(deleteCount > 0) {
                    const toDelete = keys.slice(0, deleteCount);
                    for (const key of toDelete) {
                        await env.CARD_ORDER.delete(key.name);
                    }
                }
            }
        }
    } catch (e) {
        console.error("Smart backup failed:", e);
    }
}

async function base32ToBytes(secret) {
    const TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const clean = secret.toUpperCase().replace(/[\s=]/g, '');
    const bytes = [];
    let buf = 0, bits = 0;
    for (const ch of clean) {
        const idx = TABLE.indexOf(ch);
        if (idx === -1) return null;
        buf = (buf << 5) | idx;
        bits += 5;
        if (bits >= 8) { bytes.push((buf >>> (bits - 8)) & 0xff); bits -= 8; }
    }
    return new Uint8Array(bytes);
}

async function totpCode(secret, counter) {
    const key = await base32ToBytes(secret);
    if (!key) return null;
    const buf = new Uint8Array(8);
    let v = Math.floor(counter);
    for (let i = 7; i >= 0; i--) { buf[i] = v & 0xff; v = Math.floor(v / 256); }
    const cryptoKey = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
    const sig = new Uint8Array(await crypto.subtle.sign('HMAC', cryptoKey, buf));
    const offset = sig[sig.length - 1] & 0x0f;
    const code = ((sig[offset] & 0x7f) << 24) | (sig[offset + 1] << 16) | (sig[offset + 2] << 8) | sig[offset + 3];
    return (code % 1000000).toString().padStart(6, '0');
}

async function verifyTotp(secret, code) {
    if (!secret || !code) return false;
    const c = String(code).trim();
    if (!/^\d{6}$/.test(c)) return false;
    const now = Math.floor(Date.now() / 1000);
    for (let dt = -1; dt <= 1; dt++) {
        const expected = await totpCode(secret, Math.floor(now / 30) + dt);
        if (expected && expected === c) return true;
    }
    return false;
}


function assertEnv(env) {
    const messages = [];
    if (!env.JWT_SECRET || env.JWT_SECRET.length < 32) {
        messages.push('JWT_SECRET 未配置或强度不足（需 ≥32 字符）');
    }
    if (!env.ADMIN_PASSWORD || env.ADMIN_PASSWORD.length < 8) {
        messages.push('ADMIN_PASSWORD 未配置或过短');
    }
    if (messages.length > 0) {
        const e = new Error(`FATAL: 配置缺失或无效: ${messages.join('; ')}`);
        e.code = 'CONFIG_ERROR';
        e.messages = messages;
        throw e;
    }
}

const EMPTY_DATA = { categories: {} };

function safeJsonParse(text, fallback) {
    if (typeof text !== 'string' || text === '') return { ok: false, data: fallback };
    try {
        const v = JSON.parse(text);
        if (!v || typeof v !== 'object' || Array.isArray(v)) return { ok: false, data: fallback };
        return { ok: true, data: v };
    } catch (e) {
        return { ok: false, data: fallback };
    }
}

const MAX_CATEGORIES = 100;
const MAX_LINKS_TOTAL = 3000;
const MAX_NAME = 120, MAX_TIPS = 500, MAX_URL = 2048;
const URL_SCHEME_OK = new Set(['http:', 'https:']);

function validateCategories(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { ok: false, reason: 'CATEGORIES_TYPE' };
    const keys = Object.keys(raw);
    if (keys.length > MAX_CATEGORIES) return { ok: false, reason: 'TOO_MANY_CATEGORIES' };

    let total = 0;
    for (const name of keys) {
        if (typeof name !== 'string' || name.length === 0 || name.length > MAX_NAME) {
            return { ok: false, reason: 'BAD_CATEGORY_NAME' };
        }
        const cat = raw[name];
        const links = Array.isArray(cat) ? cat : (cat && Array.isArray(cat.links) ? cat.links : null);
        if (!links) return { ok: false, reason: 'BAD_CATEGORY_SHAPE' };
        if (cat && cat.isPrivate != null && typeof cat.isPrivate !== 'boolean') return { ok: false, reason: 'BAD_FLAG' };
        if (cat && cat.isHidden != null && typeof cat.isHidden !== 'boolean') return { ok: false, reason: 'BAD_FLAG' };

        total += links.length;
        for (const l of links) {
            if (!l || typeof l !== 'object') return { ok: false, reason: 'BAD_LINK' };
            if (typeof l.name !== 'string' || l.name.length === 0 || l.name.length > MAX_NAME) return { ok: false, reason: 'BAD_NAME' };
            if (typeof l.url !== 'string' || l.url.length === 0 || l.url.length > MAX_URL) return { ok: false, reason: 'BAD_URL' };

            let u;
            try { u = new URL(l.url); } catch { return { ok: false, reason: 'BAD_URL_FORMAT' }; }
            if (!URL_SCHEME_OK.has(u.protocol)) return { ok: false, reason: 'URL_SCHEME' };

            if (l.tips != null && typeof l.tips !== 'string') return { ok: false, reason: 'BAD_TIPS' };
            if (l.icon != null && typeof l.icon !== 'string') return { ok: false, reason: 'BAD_ICON' };
            for (const flag of ['isPrivate', 'isDirect']) {
                if (l[flag] != null && typeof l[flag] !== 'boolean') return { ok: false, reason: 'BAD_FLAG' };
            }
        }
    }
    if (total > MAX_LINKS_TOTAL) return { ok: false, reason: 'TOO_MANY_LINKS' };
    return { ok: true };
}

function sanitizeCategories(raw) {
    const out = {};
    for (const name of Object.keys(raw)) {
        const cat = Array.isArray(raw[name]) ? { isHidden: false, isPrivate: false, links: raw[name] } : raw[name];
        out[name] = {
            isHidden: !!cat.isHidden,
            isPrivate: !!cat.isPrivate,
            links: (cat.links || []).map(l => ({
                name: String(l.name).slice(0, MAX_NAME),
                url: String(l.url).slice(0, MAX_URL),
                tips: l.tips ? String(l.tips).slice(0, MAX_TIPS) : '',
                icon: l.icon ? String(l.icon).slice(0, MAX_URL) : '',
                isPrivate: !!l.isPrivate,
                isDirect: !!l.isDirect,
                // 保留/回填分类归属：优先用传入值，缺失则用所在分类 key，避免 link.category 丢失后变成 undefined 分类
                category: l.category ? String(l.category).slice(0, MAX_NAME) : name,
            })),
        };
    }
    return out;
}

async function readJsonBody(request, maxBytes = 8 * 1024 * 1024) {
    const len = Number(request.headers.get('content-length') || 0);
    if (len > maxBytes) return { ok: false, reason: 'TOO_LARGE' };
    let text;
    try { text = await request.text(); } catch { return { ok: false, reason: 'READ_FAILED' }; }
    if (text.length > maxBytes) return { ok: false, reason: 'TOO_LARGE' };
    try { return { ok: true, data: JSON.parse(text) }; }
    catch { return { ok: false, reason: 'BAD_JSON' }; }
}

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        try {
            assertEnv(env);
        } catch (e) {
            console.error('CONFIG_ERROR:', e.message);
            return new Response(JSON.stringify({
                error: 'Server is not configured',
                messages: (e.code === 'CONFIG_ERROR' && Array.isArray(e.messages)) ? e.messages : []
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    ...corsHeaders(request, env),
                }
            });
        }

        resolveConfig(env);

        try {
            if (request.method === 'OPTIONS') {
                return new Response(null, { headers: {
                    ...corsHeaders(request, env),
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    'Access-Control-Max-Age': '86400',
                } });
            }

            if (url.pathname === '/api/icon') {
                return handleIconProxy(request, ctx);
            }

            if (url.pathname === '/api/theme-proxy') {
                return handleThemeProxy(request, ctx);
            }

            if (url.pathname === '/api/getTheme') {
                return handleGetTheme(request, env);
            }

            if (url.pathname === '/api/saveTheme' && request.method === 'POST') {
                return handleSaveTheme(request, env);
            }

        if (url.pathname === '/' || url.pathname === '/index.html') {
            const theme = await getPublishedTheme(env);
            const { etag, body } = await buildHtml(theme);

            if (request.headers.get('If-None-Match') === etag) {
                return new Response(null, {
                    status: 304,
                    headers: {
                        'ETag': etag,
                        // no-cache：浏览器每次都带 etag 回源校验，避免旧页面被续命
                        'Cache-Control': 'no-cache',
                    },
                });
            }

            // 边缘缓存命中 → 0 回源
            const rev = (theme && theme.updatedAt) || 0;
            const cacheKey = new Request(url.origin + '/?tr=' + rev, { method: 'GET' });
            const hit = await caches.default.match(cacheKey);
            if (hit) return hit;

            const res = new Response(body, {
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'ETag': etag,
                    'Cache-Control': 'no-cache',
                    'Vary': 'Accept-Encoding',
                },
            });
            ctx.waitUntil(caches.default.put(cacheKey, res.clone()).catch(e => console.warn('html cache put failed', e)));
            return res;
        }

        if (url.pathname === '/api/login' && request.method === 'POST') {
            const RATE_LIMIT_PREFIX = '__limit__';
            const MAX_ATTEMPTS = 5;
            const LOCK_MS = 900 * 1000;
            try {
                const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
                const rateLimitKey = `${RATE_LIMIT_PREFIX}login_${clientIP}`;
                const kv = await env.CARD_ORDER.getWithMetadata(rateLimitKey, { type: 'text' });
                const attempts = parseInt(kv.value) || 0;
                const expiredAt = (kv.metadata && kv.metadata.expiredAt) || 0;

                if (attempts >= MAX_ATTEMPTS) {
                    const waitSec = Math.max(1, Math.ceil((expiredAt - Date.now()) / 1000));
                    return new Response(JSON.stringify({ valid: false, locked: true, remaining: 0, retryAfter: waitSec }), { status: 429, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
                }

                // 密码与 TOTP 共用同一限流计数器，避免"已知密码"绕过二次验证去爆破验证码
                const registerFailure = async () => {
                    const newAttempts = attempts + 1;
                    const newExpiredAt = Date.now() + LOCK_MS;
                    await env.CARD_ORDER.put(rateLimitKey, String(newAttempts), { expirationTtl: 900, metadata: { expiredAt: newExpiredAt } });
                    return { newAttempts, remaining: Math.max(0, MAX_ATTEMPTS - newAttempts), retryAfter: Math.max(1, Math.ceil((newExpiredAt - Date.now()) / 1000)) };
                };
                const failResponse = (info, extra = {}) => {
                    if (info.newAttempts >= MAX_ATTEMPTS) {
                        return new Response(JSON.stringify({ valid: false, locked: true, remaining: 0, retryAfter: info.retryAfter, ...extra }), { status: 429, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
                    }
                    return new Response(JSON.stringify({ valid: false, remaining: info.remaining, ...extra }), { status: 403, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
                };

                const { password, totp } = await request.json();
                const passwordOk = typeof password === 'string' && (await timingSafeStringEqual(password, env.ADMIN_PASSWORD));
                if (!passwordOk) {
                    return failResponse(await registerFailure());
                }

                if (env.TOTP_SECRET) {
                    const totpOk = await verifyTotp(env.TOTP_SECRET, totp);
                    if (!totpOk) {
                        return failResponse(await registerFailure(), { error: 'INVALID_TOTP', message: '两步验证码错误' });
                    }
                }

                await env.CARD_ORDER.delete(rateLimitKey);

                const currentTime = Math.floor(Date.now() / 1000);
                const kid = await currentKeyGen(env);

                const accessTokenPayload = { 
                    iat: currentTime, 
                    exp: currentTime + 7200, 
                    role: 'admin',
                    type: 'access',
                    kid
                };
                const accessToken = await createJWT(accessTokenPayload, env.JWT_SECRET);
                
                const refreshTokenPayload = { 
                    iat: currentTime, 
                    exp: currentTime + 2592000, 
                    role: 'admin',
                    type: 'refresh',
                    kid
                };
                const refreshToken = await createJWT(refreshTokenPayload, env.JWT_SECRET);
                
                const response = new Response(JSON.stringify({ 
                    valid: true, 
                    token: `Bearer ${accessToken}` 
                }), { 
                    status: 200, 
                    headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } 
                });
                
                response.headers.append('Set-Cookie', `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict; Path=/api/refreshToken; Max-Age=2592000`);
                
                return response;
            } catch (e) {
                return new Response(JSON.stringify({ valid: false, error: 'Auth failed' }), { status: 403, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
            }
        }

        if (url.pathname === '/api/refreshToken' && request.method === 'POST') {
            try {
                const cookies = parseCookie(request.headers.get('Cookie'));
                const refreshToken = cookies.refreshToken;
                
                if (!refreshToken) {
                    return new Response(JSON.stringify({ error: 'Refresh token missing' }), { status: 401, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
                }
                
                const payload = await validateJWT(refreshToken, env.JWT_SECRET);
                const currentTime = Math.floor(Date.now() / 1000);

                if (!payload || payload.exp < currentTime) {
                    return new Response(JSON.stringify({ error: 'Refresh token expired' }), { status: 401, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
                }
                
                if (payload.type !== 'refresh') {
                    return new Response(JSON.stringify({ error: 'Invalid token type' }), { status: 400, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
                }

                const kid = await currentKeyGen(env);
                if (!payload.kid || payload.kid !== kid) {
                    return new Response(JSON.stringify({ error: 'Refresh token revoked' }), { status: 401, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
                }
                
                const newAccessTokenPayload = { 
                    iat: currentTime, 
                    exp: currentTime + 7200, 
                    role: 'admin',
                    type: 'access',
                    kid
                };
                const newAccessToken = await createJWT(newAccessTokenPayload, env.JWT_SECRET);

                const newRefreshTokenPayload = {
                    iat: currentTime,
                    exp: currentTime + 2592000,
                    role: 'admin',
                    type: 'refresh',
                    kid
                };
                const newRefreshToken = await createJWT(newRefreshTokenPayload, env.JWT_SECRET);
                
                const response = new Response(JSON.stringify({ 
                    accessToken: `Bearer ${newAccessToken}` 
                }), { 
                    status: 200, 
                    headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } 
                });

                response.headers.append('Set-Cookie', `refreshToken=${newRefreshToken}; HttpOnly; Secure; SameSite=Strict; Path=/api/refreshToken; Max-Age=2592000`);

                return response;
            } catch (e) {
                return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' } });
            }
        }

        if (url.pathname === '/api/validateToken') {
            const validation = await validateServerToken(request.headers.get('Authorization'), env);
            return new Response(JSON.stringify(validation.isValid ? { valid: true } : validation.response), {
                status: validation.status || 200, 
                headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' }
            });
        }

        if (url.pathname === '/api/getLinks') {
            const authHeader = request.headers.get('Authorization');

            let scope = 'anon';
            if (authHeader) {
                const v = await validateServerToken(authHeader, env);
                if (v.isValid) scope = 'authed';
            }

            const rev = scope === 'anon' ? await getDataRev(env) : '0';
            const cacheKey = cacheKeyFor(url, rev, scope);

            // ② 边缘缓存命中 → 0 KV 读
            if (scope === 'anon') {
                const hit = await CACHE.match(cacheKey);
                if (hit) {
                    const r = new Response(hit.body, hit);
                    r.headers.set('X-KV-Cache', 'HIT');
                    return r;
                }
            }

            const data = await readLinksKv(env);

            if (data && data.categories) {
                for (const name of Object.keys(data.categories)) {
                    for (const l of data.categories[name].links || []) {
                        if (l.category === undefined || l.category === null) l.category = name;
                    }
                }
            }
            let body, cacheable;

            if (scope === 'authed') {
                body = JSON.stringify(data);
                cacheable = false;
            } else {
                body = JSON.stringify({ categories: filterPublic(data.categories) });
                cacheable = true;
            }
            return sendCached(body, request, cacheKey, cacheable, { 'X-KV-Cache': 'MISS' });
        }

        if (url.pathname === '/api/saveData' && request.method === 'POST') {
            const validation = await validateServerToken(request.headers.get('Authorization'), env);
            if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });

            const body = await readJsonBody(request);
            if (!body.ok) return new Response(JSON.stringify({ error: body.reason }), { status: body.reason === 'TOO_LARGE' ? 413 : 400, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
            const categories = body.data.categories;

            const check = validateCategories(categories);
            if (!check.ok) return new Response(JSON.stringify({ error: 'INVALID_DATA', detail: check.reason }), { status: 422, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });

            try {
                const currentData = await env.CARD_ORDER.get(DEFAULT_USER);
                
                if (currentData) {
                    ctx.waitUntil(handleSmartBackup(env, currentData));
                }

                await env.CARD_ORDER.put(DEFAULT_USER, JSON.stringify({ categories: sanitizeCategories(categories) }));

                const rev = await bumpRev(env);
                
                return new Response(JSON.stringify({ success: true, rev }), { status: 200, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
            } catch (e) {
                return new Response(JSON.stringify({ error: 'Bad Request' }), { status: 400, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
            }
        }

        if (url.pathname === '/api/backupData' && request.method === 'POST') {
            const validation = await validateServerToken(request.headers.get('Authorization'), env);
            if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
            
            const sourceData = await env.CARD_ORDER.get(DEFAULT_USER);
            
            if(sourceData) {
                 const now = Date.now();
                 const date = new Date(now + 8 * 3600 * 1000);
                 const dateStr = date.toISOString().replace(/[:.]/g, '-');
                 await env.CARD_ORDER.put(`backup_${DEFAULT_USER}_${dateStr}`, sourceData, {
                     metadata: { timestamp: now }
                 });
                 
                 return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
            }
            return new Response(JSON.stringify({ success: false, error: 'User data not found' }), { status: 404, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
        }
        
        if (url.pathname === '/api/exportData' && request.method === 'POST') {
             const validation = await validateServerToken(request.headers.get('Authorization'), env);
             if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
             
             const data = await env.CARD_ORDER.get(DEFAULT_USER);
             return new Response(data || '{}', { status: 200, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
        }
        
        if (url.pathname === '/api/importData' && request.method === 'POST') {
             const validation = await validateServerToken(request.headers.get('Authorization'), env);
             if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
              
             const bodyObj = await readJsonBody(request);
             if (!bodyObj.ok) return new Response(JSON.stringify({ error: bodyObj.reason }), { status: bodyObj.reason === 'TOO_LARGE' ? 413 : 400, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });

             const categories = bodyObj.data.categories || {};

             const check = validateCategories(categories);
             if (!check.ok) return new Response(JSON.stringify({ error: 'INVALID_DATA', detail: check.reason }), { status: 422, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });

             const cleanData = {
                 categories: sanitizeCategories(categories)
             };
             
             await env.CARD_ORDER.put(DEFAULT_USER, JSON.stringify(cleanData));

             const rev = await bumpRev(env);
             return new Response(JSON.stringify({ success: true, rev }), { status: 200, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
        }

        if (url.pathname === '/api/logout' && request.method === 'POST') {
            const validation = await validateServerToken(request.headers.get('Authorization'), env);
            if (!validation.isValid) return new Response(JSON.stringify(validation.response), { status: validation.status, headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json'} });
            await bumpKeyGen(env);
            const response = new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { ...corsHeaders(request, env), 'Content-Type': 'application/json' }
            });
            response.headers.append('Set-Cookie', 'refreshToken=; HttpOnly; Secure; SameSite=Strict; Path=/api/refreshToken; Max-Age=0');
            return response;
        }

        return new Response('Not Found', { status: 404, headers: corsHeaders(request, env) });
        } catch (e) {
            console.error('UNHANDLED', e, url.pathname, request.method);
            return new Response(JSON.stringify({ error: 'INTERNAL' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }
    }
};
