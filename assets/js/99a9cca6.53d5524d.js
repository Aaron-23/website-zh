(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[8876],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=o(a),m=r,f=k["".concat(d,".").concat(m)]||k[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5151:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={title:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",sidebar_label:"\u6a21\u62df\u78c1\u76d8\u6545\u969c"},s={unversionedId:"simulate-disk-pressure-in-physical-nodes",id:"simulate-disk-pressure-in-physical-nodes",isDocsHomePage:!1,title:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",description:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",source:"@site/docs/simulate-disk-pressure-in-physical-nodes.md",sourceDirName:".",slug:"/simulate-disk-pressure-in-physical-nodes",permalink:"/website-zh/docs/simulate-disk-pressure-in-physical-nodes",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/docs/simulate-disk-pressure-in-physical-nodes.md",version:"current",sidebar_label:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",frontMatter:{title:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",sidebar_label:"\u6a21\u62df\u78c1\u76d8\u6545\u969c"},sidebar:"docs",previous:{title:"\u6a21\u62df\u538b\u529b\u573a\u666f",permalink:"/website-zh/docs/simulate-heavy-stress-in-physical-nodes"},next:{title:"\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f",permalink:"/website-zh/docs/multi-data-center-scenario"}},d=[{value:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",id:"\u6a21\u62df\u78c1\u76d8\u6545\u969c",children:[{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[]},{value:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[]}]}],o={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6a21\u62df\u78c1\u76d8\u6545\u969c"},"\u6a21\u62df\u78c1\u76d8\u6545\u969c"),(0,l.kt)("p",null,"\u8be5\u529f\u80fd\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," \u5728\u7269\u7406\u673a\u5668\u4e0a\u6a21\u62df\u78c1\u76d8\u8bfb\u5199\u8d1f\u8f7d\u548c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd"),"\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/fallocate.1.html"},"fallocate"),"\u5728\u7269\u7406\u673a\u5668\u4e0a\u6a21\u62df\u78c1\u76d8\u586b\u5145\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u67e5\u770b Chaosd \u652f\u6301\u54ea\u4e9b\u7c7b\u578b\u7684\u78c1\u76d8\u538b\u529b\u5b9e\u9a8c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"disk attack related command\n\nUsage:\n  chaosd attack disk [command]\n\nAvailable Commands:\n  add-payload add disk payload\n  fill        fill disk\n\nFlags:\n  -h, --help   help for disk\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n\nUse \"chaosd attack disk [command] --help\" for more information about a command.\n")),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u547d\u4ee4"},"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload read -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"read payload\n\nUsage:\n  chaosd attack disk add-payload read [flags]\n\nFlags:\n  -h, --help                help for read\n  -p, --path string         'path' specifies the location to read data.If path not provided, payload will read from disk mount on \"/\"\n  -n, --process-num uint8   'process-num' specifies the number of process work on reading , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will read from the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u547d\u4ee4"},"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload write -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"write payload\n\nUsage:\n  chaosd attack disk add-payload write [flags]\n\nFlags:\n  -h, --help                help for write\n  -p, --path string         'path' specifies the location to fill data in.If path not provided, payload will write into a temp file, temp file will be deleted after writing\n  -n, --process-num uint8   'process-num' specifies the number of process work on writing , default 1, only 1-255 is valid value (default 1)\n  -s, --size string         'size' specifies how many units of data will write into the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u586b\u5145\u547d\u4ee4"},"\u6a21\u62df\u78c1\u76d8\u586b\u5145\u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk fill -h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"fill disk\n\nUsage:\n  chaosd attack disk fill [flags]\n\nFlags:\n  -d, --destroy          destroy file after filled in or allocated\n  -f, --fallocate        fill disk by fallocate instead of dd (default true)\n  -h, --help             help for fill\n  -p, --path string      'path' specifies the location to fill data in.If path not provided, a temp file will be generated and deleted immediately after data filled in or allocated\n  -c, --percent string   'percent' how many percent data of disk will fill in the file path\n  -s, --size string      'size' specifies how many units of data will fill in the file path.'unit' specifies the unit of data, support c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000,M=1024*1024, , GB=1000*1000*1000, G=1024*1024*1024 BYTESexample : 1M | 512kB\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n")),(0,l.kt)("h4",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u7684\u914d\u7f6e\u8bf4\u660e"},"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d\u76f8\u5173\u7684\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6240\u8bfb\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4ece\u76ee\u5f55\u201c/\u201d\u6240\u6302\u8f7d\u7684\u865a\u62df\u78c1\u76d8\u6587\u4ef6\u8bfb\u53d6\u3002\u6839\u636e\u8bfb\u53d6\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u7528\u6237\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"process-num"),(0,l.kt)("td",{parentName:"tr",align:"left"},"n"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u591a\u5c11\u4e2a\u5e76\u53d1\u8fd0\u884c\u7684 ",(0,l.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," \u8fdb\u7a0b\u6267\u884c\u7a0b\u5e8f\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8 \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u8303\u56f4\u4e3a 1-255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"s"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u8bfb\u53d6\u591a\u5c11\u6570\u636e\u3002size \u4e3a \u591a\u4e2a dd \u8bfb\u6570\u636e\u7684\u603b\u91cf\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\uff1a"},"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6240\u5199\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5728\u7a0b\u5e8f\u6267\u884c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002\u6839\u636e\u5199\u5165\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u7528\u6237\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"process-num"),(0,l.kt)("td",{parentName:"tr",align:"left"},"n"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u4f7f\u7528\u591a\u5c11\u4e2a\u5e76\u53d1\u8fd0\u884c\u7684 ",(0,l.kt)("a",{parentName:"td",href:"https://man7.org/linux/man-pages/man1/dd.1.html"},"dd")," \u8fdb\u7a0b\u6267\u884c\u7a0b\u5e8f\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint8 \u7c7b\u578b\u3002\u9ed8\u8ba4\u503c\u4e3a 1\uff0c\u8303\u56f4\u4e3a 1-255")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"s"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5199\u5165\u591a\u5c11\u6570\u636e\uff0csize \u4e3a \u591a\u4e2add \u5199\u6570\u636e\u7684\u603b\u91cf\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a""\uff0c\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000',"*","1000,M=1024","*","1024\u3001GB=1000","*","1000","*","1000\u3001G=1024","*","1024","*",'1024 BYTE\u7b49\u3002size \u4e0d\u80fd\u4e3a "" \u3002')))),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\uff1a"},"\u6a21\u62df\u78c1\u76d8\u586b\u5145\u76f8\u5173\u914d\u7f6e\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u914d\u7f6e\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"destroy"),(0,l.kt)("td",{parentName:"tr",align:"left"},"d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u6b64\u53c2\u6570\u4e3a true \uff0c\u5219\u5728\u586b\u5145\u6587\u4ef6\u540e\u7acb\u5373\u5220\u9664\u586b\u5145\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a false\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fallocate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u6b64\u53c2\u6570\u4e3a true \uff0c\u5219\u4f7f\u7528 linux \u8c03\u7528 fallocate \u6765\u5feb\u901f\u7533\u8bf7\u78c1\u76d8\u7a7a\u95f4\uff0c\u6b64\u65f6 size \u5fc5\u987b\u5927\u4e8e 0\u3002\u5982\u679c\u6b64\u53c2\u6570\u4e3a false\uff0c\u5219\u4f7f\u7528 linux \u8c03\u7528 dd \u4ee5\u76f8\u5bf9\u8f83\u6162\u901f\u5ea6\u586b\u5145\u78c1\u76d8\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a true\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"p"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u6240\u5199\u6570\u636e\u7684\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u6216\u8005\u8bbe\u7f6e\u53c2\u6570\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5728\u7a0b\u5e8f\u6267\u884c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002\u6839\u636e\u5199\u5165\u6587\u4ef6\u7684\u6743\u9650\u4e0d\u540c\uff0c\u4f1a\u9700\u8981\u7528\u6237\u4f7f\u7528\u4e00\u5b9a\u7684\u6743\u9650\u8fd0\u884c\u672c\u7a0b\u5e8f\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"percent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u586b\u5145\u591a\u5c11\u767e\u5206\u6bd4\u78c1\u76d8\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ""\uff0c\u53ef\u4ee5\u586b\u5165 uint \u7c7b\u578b\u7684\u6b63\u6574\u6570\uff0c size \u4e0d\u80fd\u548c percent \u90fd\u4e3a ""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"s"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u5199\u5165\u591a\u5c11\u6570\u636e\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},'string \u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a""\uff0c\u5408\u6cd5\u5f62\u5f0f\u4e3a\u4e00\u4e2a\u6574\u6570\u52a0\u4e00\u4e2a\u5355\u4f4d\u3002\u4f8b\u5982\uff1a1M\u3001512kB\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709 c=1\u3001w=2\u3001b=512\u3001kB=1000\u3001K=1024\u3001MB=1000',"*","1000,M=1024","*","1024\u3001GB=1000","*","1000","*","1000\u3001G=1024","*","1024","*",'1024 BYTE\u7b49\u3002size \u4e0d\u80fd\u548c percent \u90fd\u4e3a "" \u3002')))),(0,l.kt)("h4",{id:""}),(0,l.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d"},"\u6a21\u62df\u78c1\u76d8\u8bfb\u8d1f\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'andrew@LAPTOP-NUS30NQD:~/chaosd/bin$ ./chaosd attack disk add-payload read -s 1000G -n 7 -p /dev/zero\n[2021/05/20 13:54:31.323 +08:00] [INFO] [disk.go:128] ["5242880+0 records in\\n5242880+0 records out\\n5242880 bytes (5.2 MB, 5.0 MiB) copied, 4.13252 s, 1.3 MB/s\\n"]\n[2021/05/20 13:54:46.977 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6513 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.002 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6762 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.004 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6777 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.015 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6899 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.018 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.6914 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.051 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7254 s, 9.8 GB/s\\n"]\n[2021/05/20 13:54:47.074 +08:00] [INFO] [disk.go:147] ["146285+0 records in\\n146285+0 records out\\n153390940160 bytes (153 GB, 143 GiB) copied, 15.7487 s, 9.7 GB/s\\n"]\nRead file /dev/zero successfully, uid: 4bc9b74a-5fe2-4038-b4f2-09ae95b57694\n')),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d"},"\u6a21\u62df\u78c1\u76d8\u5199\u8d1f\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk add-payload write -s 2G -n 8\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[2021/05/20 14:28:14.452 +08:00] [INFO] [disk.go:128] ["0+0 records in\\n0+0 records out\\n0 bytes copied, 4.3e-05 s, 0.0 kB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.32841 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3344 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33312 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33466 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33189 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33752 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.793 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.33295 s, 115 MB/s\\n"]\n[2021/05/20 14:28:16.794 +08:00] [INFO] [disk.go:147] ["256+0 records in\\n256+0 records out\\n268435456 bytes (268 MB, 256 MiB) copied, 2.3359 s, 115 MB/s\\n"]\nWrite file /home/andrew/chaosd/bin/example255569279 successfully, uid: e66afd86-6f3e-43a0-b161-09447ed84856\n')),(0,l.kt)("h5",{id:"\u6a21\u62df\u78c1\u76d8\u586b\u5145"},"\u6a21\u62df\u78c1\u76d8\u586b\u5145"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chaosd attack disk fill -c 50 -d\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[2021/05/20 14:30:02.943 +08:00] [INFO] [disk.go:215]\nFill file /home/andrew/chaosd/bin/example623832242 successfully, uid: 097b4214-8d8e-46ad-8768-c3e0d8cbb326\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528\u670d\u52a1\u6a21\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("p",null,"\uff08\u5f85\u8865\u5145\uff09"))}p.isMDXComponent=!0}}]);