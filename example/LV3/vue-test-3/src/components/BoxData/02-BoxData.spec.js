import { mount } from "@vue/test-utils";
import BoxData from "@/components/BoxData";
import { ref } from "vue";

// https://github.com/vuejs/test-utils/issues/1058
describe("BoxData.vue", () => {
  // const data = {
  //   setup() {
  //     const isOpen = ref(true);
  //     return {isOpen}
  //   }
  // }
  it("setData Value change isOpen",async () => {
    const wrapper = mount(BoxData);
    await wrapper.setData({isOpen: true})
    expect(wrapper.find(".box_data").isVisible()).toBe(true);
  });
});
