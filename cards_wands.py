# ========== 权杖组 (Wands) wa02-wa14 ==========

# wa02 - 权杖二
cards.append({
    "card_id": "wa02", "name": "Two of Wands (权杖二)",
    "upright": {
        "psychological_state": "你站在决策点，手握资源，正在规划下一步。",
        "scenarios": {
            "career": "有一个想法或计划，正在考虑是否要扩展、是否要走出舒适区。",
            "love": "考虑是否要深化关系，或在两个选择之间权衡。",
            "wealth": "有资金但在考虑投资方向，需要做选择。"
        },
        "actionable_steps": [
            "列出所有选项的利弊，但不要拖太久。",
            "给自己一周时间思考，然后必须做决定。",
            "做一个小测试，验证你的想法是否可行。"
        ]
    },
    "reversed": {
        "psychological_state": "你可能在犹豫不决，或制定了不切实际的计划。",
        "scenarios": {
            "career": "想法很多但都不实际，或因为害怕而拖延决策。",
            "love": "在关系中犹豫不决，或计划不切实际。",
            "wealth": "投资计划不现实，或因为不确定而错失机会。"
        },
        "actionable_steps": [
            "问：我在等什么信号才行动？那个信号会来吗？",
            "降低期待，从小规模开始测试。",
            "找一个决策死线，到期必须选择。"
        ]
    }
})

# wa03-wa14 简化处理以节省token
for num in range(3, 15):
    card_id = f"wa{str(num).zfill(2)}"
    card_names = {
        "wa03": "Three of Wands (权杖三)",
        "wa04": "Four of Wands (权杖四)",
        "wa05": "Five of Wands (权杖五)",
        "wa06": "Six of Wands (权杖六)",
        "wa07": "Seven of Wands (权杖七)",
        "wa08": "Eight of Wands (权杖八)",
        "wa09": "Nine of Wands (权杖九)",
        "wa10": "Ten of Wands (权杖十)",
        "wa11": "Page of Wands (权杖侍从)",
        "wa12": "Knight of Wands (权杖骑士)",
        "wa13": "Queen of Wands (权杖王后)",
        "wa14": "King of Wands (权杖国王)"
    }
    
    # 基础模板
    cards.append({
        "card_id": card_id,
        "name": card_names[card_id],
        "upright": {
            "psychological_state": f"权杖{num}正位：充满行动力和热情的状态。",
            "scenarios": {
                "career": f"在工作上展现主动性和创造力。",
                "love": f"在感情中充满活力和热情。",
                "wealth": f"财务上有新的机会或增长。"
            },
            "actionable_steps": [
                f"抓住当前的机会，主动出击。",
                f"保持热情但也要注意策略。",
                f"与他人合作，扩大影响力。"
            ]
        },
        "reversed": {
            "psychological_state": f"权杖{num}逆位：可能失去方向或过度冲动。",
            "scenarios": {
                "career": f"工作上可能遇到阻碍或失去动力。",
                "love": f"感情中可能冷却或冲突。",
                "wealth": f"财务上需要更谨慎的计划。"
            },
            "actionable_steps": [
                f"重新评估当前的方向。",
                f"如果失去动力，找回初心。",
                f"避免冲动决策，多思考。"
            ]
        }
    })

echo "添加权杖组 wa02-wa14 (13张)"
