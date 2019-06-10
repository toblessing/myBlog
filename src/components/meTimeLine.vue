<style scoped>
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
</style>
<template>
  <Timeline>
    <template v-for="point in data">
      <template v-if="isCard">
        <TimelineItem  v-bind:key="point" :color="point.color">
          <Card style="top:-44px">
            <p slot="title">{{point.content}}</p>
            <p >{{point.time}}</p>
          </Card>
        </TimelineItem>
      </template>
      <template v-else>
        <TimelineItem v-bind:key="point" :color="point.color">
          <p class="time">{{ point.time }}</p>
          <p class="content">{{ point.content }}</p>
        </TimelineItem>
      </template>
    </template>
  </Timeline>
</template>
<script>
export default {
  props: {
    data: Array,
    isCard: {
      type: Boolean,
      default: false
    }
  }
};
</script>
