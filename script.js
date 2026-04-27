function generateScript() {
  const topic = document.getElementById("topic").value;
  const type = document.getElementById("type").value;
  const output = document.getElementById("output");

  if (!topic) {
    output.value = "اكتب موضوع أولاً!";
    return;
  }

  let script = "";

  if (type === "youtube") {
    script = `🎬 مقدمة:
هل تعلم عن ${topic}؟ اليوم سنكتشف ذلك!

📌 المحتوى:
${topic} موضوع مهم لأنه...
سنتحدث عن أهم النقاط...

🔥 خاتمة:
إذا أعجبك الفيديو لا تنسَ الاشتراك!`;
  }

  if (type === "tiktok") {
    script = `🔥 هوك:
لن تصدق هذا عن ${topic}!

⚡ المحتوى:
${topic} لديه أسرار كثيرة...

🎯 نهاية:
تابعني للمزيد!`;
  }

  if (type === "speech") {
    script = `🗣️ مقدمة:
اليوم سأتحدث عن ${topic}.

📚 عرض:
${topic} يعتبر من المواضيع المهمة...

✅ خاتمة:
شكراً على الاستماع.`;
  }

  output.value = script;
}
