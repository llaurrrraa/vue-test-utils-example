import { mount } from "@vue/test-utils";
import InputBar from "@/components/InputBar";
import { nextTick, ref } from "vue";

describe("InputBar.vue", () => {
  it("input set Value", () => {
    const wrapper = mount(InputBar);
    wrapper.find('input.name').setValue('Laura');
    expect(wrapper.find('input.name').element.value).toBe('Laura');
    // await wrapper.find("input.name").setValue("Mike");
    // expect(wrapper.find("input.name").element.value).toBe("Mike");
    // await wrapper.find("input.email").setValue("1208966@gmail.com");
    // expect(wrapper.find("input.email").element.value).toBe("1208966@gmail.com");

    // const input = wrapper.find('input.name')
    // input.element.value = 'Hello' 
    // input.trigger('input')
    // await nextTick()
    // expect(wrapper.find("input.name").element.value).toBe("Hello");
  });
  it("props computed change input value", async() => {
    const wrapper = mount(InputBar);
    // wrapper.vm.a = 3012300;
    // await nextTick();
    await wrapper.setProps({ thousand: '3012300'});
    expect(wrapper.find("input.num").element.value).toBe("3,012,300");
  });
});
