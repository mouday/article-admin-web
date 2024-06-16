.PHONY: dev
dev:
	npm run dev

# make dep-pro
.PHONY: dep-pro
dep-pro:
	npm run build && cp -R ./dist/* ../article-admin/src/public/
