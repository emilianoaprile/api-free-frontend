<!-- Card di ogni singolo post -->

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card">
        <img src="/logo.png" class="card_image" :alt="post.title" />
        <div class="card_content">
            <div class="card_header">
                <img class="card_thumb" src="/logoGreen.png" alt="" />
                <div class="card_header-text">
                    <h3 class="card_title">{{ post.title }}</h3>
                </div>
            </div>
            <p class="card_description">{{ post.content }}</p>
            <div class="card_details">
                <div class="tags">
                    <span v-for="tag in post.tags" :key="tag.id" class="card_tag"> #{{ tag.name }}</span>
                </div>
                <!-- <div class="card_category"><strong>Categoria:</strong> {{ post.category.name }}</div> -->
            </div>
        </div>
    </div>

</template>


<style scoped>
.card {
    background-color: #00BF63;
    border-radius: 8px;
    box-shadow: 0px 0px 43px 22px rgba(255, 255, 255, 0.1);
    overflow: hidden;
    width: auto;
}

.card_image {
    width: 100%;
    height: auto;
}

.card_header {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: white;
    height: 60px;
}

.card_thumb {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    display: block;
}

.card_header-text {
    margin-left: 10px;
}

.card_title {
    font-size: 18px;
    margin: 0;
    color: #333;
}

.card_description {
    padding: 10px;
    margin: 0;
    color: #666;
    font-size: 14px;
    background-color: white;
    border-top: 1px solid #ddd;
    height: 100px;
}

.card_details {
    padding: 10px;
    margin: 0;
    color: black;
    font-size: 14px;
    background-color: white;
    border-top: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card_content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card_category {
    padding-top: 10px;
    margin: 0;
    color: black;
    font-size: 14px;
    background-color: white;
    border-top: 1px solid #ddd;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
</style>