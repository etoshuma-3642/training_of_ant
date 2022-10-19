FROM node:16.18.0
# ベースイメージ

ENV LANG=C.UTF-8
# 環境言語UTF-8の指定
ENV TZ=Asia/Tokyo
# 時間を東京に指定

WORKDIR /frontend