import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  language: string;
  timestamp: Date;
}

const MultilingualChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ru");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages = {
    ru: { name: "🇷🇺 Русский", placeholder: "Напишите сообщение..." },
    en: { name: "🇺🇸 English", placeholder: "Type a message..." },
    zh: { name: "🇨🇳 中文", placeholder: "输入消息..." },
    ko: { name: "🇰🇷 한국어", placeholder: "메시지를 입력하세요..." },
    ja: { name: "🇯🇵 日本語", placeholder: "メッセージを入力してください..." },
  };

  const welcomeMessages = {
    ru: "Добро пожаловать в Мост культуры! Расскажу о традициях народов Дальнего Востока — от нанайцев до эвенков.",
    en: "Welcome to Culture Bridge! I'll tell you about Far Eastern peoples' traditions — from Nanai to Evenks.",
    zh: "欢迎来到文化桥梁！我将为您介绍远东民族的传统——从那乃族到鄂温克族。",
    ko: "문화의 다리에 오신 것을 환영합니다! 나나이족부터 에벤크족까지 극동 민족의 전통을 알려드리겠습니다.",
    ja: "文化の架け橋へようこそ！ナナイ族からエヴェンキ族まで、極東民族の伝統についてお話しします。",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "1",
        text: welcomeMessages[selectedLanguage as keyof typeof welcomeMessages],
        sender: "bot",
        language: selectedLanguage,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, selectedLanguage]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      language: selectedLanguage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Симуляция ответа бота
    setTimeout(() => {
      const botResponses = {
        ru: "Интересный вопрос! Коренные народы Дальнего Востока сохранили богатые традиции. Хотите узнать о конкретном народе?",
        en: "Interesting question! Far Eastern indigenous peoples have preserved rich traditions. Would you like to learn about a specific people?",
        zh: "有趣的问题！远东原住民保留了丰富的传统。您想了解具体的民族吗？",
        ko: "흥미로운 질문입니다! 극동 원주민들은 풍부한 전통을 보존했습니다. 특정 민족에 대해 알고 싶으신가요?",
        ja: "興味深い質問ですね！極東の先住民は豊かな伝統を保持しています。特定の民族について知りたいですか？",
      };

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[selectedLanguage as keyof typeof botResponses],
        sender: "bot",
        language: selectedLanguage,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-forest-500 hover:bg-forest-600 text-white rounded-full p-4 shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96 animate-scale-in">
      <Card className="h-full flex flex-col shadow-xl">
        <CardHeader className="bg-forest-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Культурный чат</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-forest-600 p-1"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full bg-forest-600 border-forest-400 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languages).map(([code, lang]) => (
                <SelectItem key={code} value={code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>

        <CardContent className="flex-1 p-0">
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-forest-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                languages[selectedLanguage as keyof typeof languages]
                  .placeholder
              }
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-forest-500 hover:bg-forest-600 text-white"
            >
              <Icon name="Send" size={16} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultilingualChat;
