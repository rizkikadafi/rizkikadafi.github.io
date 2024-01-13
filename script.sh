docker container run --rm -it -p 4000:4000 -p 35729:35729 \
--volume $(pwd):/app --volume /app/node_modules --volume /app/vendor \
--name jekyllwind rizkikadafi/jekyll-tailwind:latest
