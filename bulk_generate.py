import json

# 快速生成框架（保持深度但精简表达）
def create_card(card_id, name_cn, name_en, symbols_desc, core_pattern, upright_core, reversed_core):
    return {
        "card_id": card_id,
        "name": f"{name_cn} {name_en}",
        "symbols": {
            "visual_elements": symbols_desc.split(" | "),
            "waite_essence": core_pattern["essence"]
        },
        "psychological_core": {
            "inner_pattern": core_pattern["pattern"],
            "energy_movement": core_pattern["energy"],
            "transformation_point": core_pattern["transform"]
        },
        "upright": {
            "core_message": upright_core["message"],
            "what_this_means": upright_core["meaning"],
            "how_to_work_with_it": upright_core["practice"],
            "inner_state": upright_core["state"]
        },
        "reversed": {
            "energy_state": reversed_core["energy"],
            "what_this_means": reversed_core["meaning"],
            "how_to_adjust": reversed_core["adjust"],
            "growth_gift": reversed_core["gift"]
        },
        "up": upright_core["summary"],
        "down": reversed_core["summary"]
    }

# 批量生成 ar06-ar21
remaining_major = [
    ("ar06", "恋人", "The Lovers", 
     "天使从天降下祝福 | 亚当夏娃裸露站立 | 生命之树与知识之树 | 纯真的选择时刻",
     {"essence": "真正的选择不是理性计算，而是心的召唤。真正的结合不是完美匹配，而是真实相遇。",
      "pattern": "从'我应该选什么'的头脑分析，转向'我的心被什么吸引'的真实感受。",
      "energy": "恋人的能量是吸引与选择的平衡——你被某个人/事物吸引，但你仍需做出承诺的选择。",
      "transform": "从'完美主义的选择'到'真实的承诺'。"},
     {"message": "现在是做出心的选择的时候——不是头脑计算的'最优解'，而是让你感觉'对，就是这个'的选择。", 
      "meaning": "这张牌通常意味着：你面临重要选择（关系、工作、生活方向），理性分析已经够多了，现在需要倾听心的声音。真正的选择不是找'最没风险的'，而是找'最真实的'。",
      "practice": "如果你在两个选项间纠结，闭上眼睛想象自己选了A，感受身体反应；再想象选了B，感受身体反应。身体会告诉你答案——放松=对，紧绷=不对。",
      "state": "你的心已经知道答案，只是头脑还在犹豫。信任你的吸引力，它比逻辑更诚实。",
      "summary": "做出心的选择的时候——不是头脑计算的最优解，而是让你感觉'对，就是这个'的选择。真正的选择不是找最没风险的，是找最真实的。身体会告诉你答案——放松=对，紧绷=不对。信任你的吸引力，它比逻辑更诚实。"},
     {"energy": "能量卡在：过度理性（列优缺点表但越列越糊涂，因为心不在表上），或逃避选择（拖延决定，让环境替你选）。",
      "meaning": "过度理性=你试图用头脑控制心的选择，但心不是这样运作的。逃避选择=你害怕选错，但不选择本身也是一个选择——只是你把主导权交出去了。",
      "adjust": "过度理性者：今天做一个'不合理但感觉对'的小选择。逃避选择者：今天为拖延的决定设定一个死线，到期就选，即使不完美。",
      "gift": "这是在教你：有些选择无法被优化，只能被承诺。你不是在找完美答案，而是在为不完美的选择承担责任。",
      "summary": "能量卡在：过度理性（列表但越列越糊涂）或逃避选择（不选也是选，只是你把主导权交出去）。解药：做一个'不合理但感觉对'的小选择，或为拖延决定设死线。这是在教你：有些选择无法被优化，只能被承诺。"}
    ),
]

# 添加更多牌...（这里演示框架，实际需要补充完整）

print("正在生成剩余大阿卡纳...")
print(f"目标：生成 ar06-ar21 (16张)")

with open('tarot-78-deep-complete.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 生成并添加
for card_data in remaining_major:
    card = create_card(*card_data)
    data['cards'].append(card)

# 保存
with open('tarot-78-deep-complete.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"✅ 当前进度: {len(data['cards'])}/78 张")
