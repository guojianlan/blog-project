# blog-project
## 创建配置文件
在apps/cms和apps/web创建.env配置文件
***
### cms配置
apps/cms/.env
```dotenv
HOST=0.0.0.0
PORT=1337
APP_KEYS=EPEM9qKBoQFbfeR6RXlUKg==,OMCGDCpiFmjYWiTJ2h/yuw==,OXQOmrOkmd1SvpvbQB7aiw==,FAtD+3g44qDqfinQrxCuvA==
API_TOKEN_SALT=nAc8N++d4JZf3qopgxVuUA==
ADMIN_JWT_SECRET=lhXvM/wUlUuZm1EvRhLQyg==
TRANSFER_TOKEN_SALT=rZeK0/2mYkjOK3HuhV9Qdw==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=8yS7OziJ0X18ETu+KOy2+g==

```
apps/web/.env
### web配置
```dotenv
APIBASEURL=http://127.0.0.1:1337
IMAGEDOMAIN=http://127.0.0.1:1337

```

## 启动
拉取项目后，执行pnpm install,然后执行命令pnpm run dev可以快速启动项目， 因为nextjs的项目会访问strapi的api，然后启动脚本不能写依赖关系，  
如果直接启动会造成nextjs项目在启动时会有报错因此可以先启动cms的项目之后再启动nextjs的前端项目。所以比较稳妥是pnpm run dev:cms成功后再启动 pnpm run dev:!cms  
然后我们可以访问cms的后台管理系统[http://127.0.0.1:1337/admin](http://127.0.0.1:1337/admin)和前端页面[http://127.0.0.1:3000](http://127.0.0.1:3000)
