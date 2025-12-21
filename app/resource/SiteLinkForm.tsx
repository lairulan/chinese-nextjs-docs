"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sourceLinks } from "@/config/resource";

const SiteLinkForm = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    siteName: "",
    siteCategory: "tech-blog",
    siteUrl: "",
    description: "",
    tags: "",
    email: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      const response = await fetch("/api/submit-site-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("提交失败，请稍后重试");
      }

      setFormData({
        siteName: "",
        siteCategory: "tech-blog",
        siteUrl: "",
        description: "",
        tags: "",
        email: "",
      });

      setStatus({ loading: false, success: true, error: "" });
      // 添加成功提示并关闭弹框
      toast({
        title: "提交成功",
        description: "我们会尽快审核您的推荐",
      });
      setOpen(false);
    } catch (error: any) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="lg">
          推荐网站
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-[450px]">
        <DialogTitle className="text-lg font-semibold">推荐网站</DialogTitle>
        <Card className="w-full max-w-2xl mx-auto mt-2 pt-2">
          <CardTitle className="text-lg mx-5">网站信息</CardTitle>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mt-4">
                <RadioGroup
                  required
                  value={formData.siteCategory}
                  onValueChange={(value) =>
                    setFormData({ ...formData, siteCategory: value })
                  }
                  className="flex space-1 flex-wrap"
                >
                  {sourceLinks.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem value={category.id} id={category.id} />
                      <Label htmlFor={category.id}>{category.category}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {formData.siteCategory === "tech-blog" && (
                <div className="rounded-lg bg-white p-4 text-sm space-y-2">
                  <p>技术博客请先在您的网站添加以下友链信息：</p>
                  <div className="bg-muted p-3 rounded-md space-y-1">
                    <p>
                      <strong>名称：</strong> Next.js 中文文档
                    </p>
                    <p>
                      <strong>链接：</strong> https://nextjscn.org
                    </p>
                    <p>
                      <strong>描述：</strong> Next.js 中文文档和资源
                    </p>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    ⚠️ 请确保友链为
                    dofollow，我们会在收到申请后查看并添加您的网站
                  </p>
                </div>
              )}
              <div>
                <Input
                  placeholder="网站名称"
                  value={formData.siteName}
                  onChange={(e) =>
                    setFormData({ ...formData, siteName: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  placeholder="网站链接"
                  type="url"
                  value={formData.siteUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, siteUrl: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="网站描述"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  placeholder="网站标签（用逗号分隔，如：前端,全栈,React）"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  placeholder="联系邮箱"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={status.loading}
                className="w-full"
              >
                {status.loading ? "提交中..." : "提交推荐"}
              </Button>

              {/* {status.success && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>提交成功！我们会尽快审核</span>
                </div>
              )} */}

              {status.error && (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span>{status.error}</span>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default SiteLinkForm;
