import React from "react";
import { X, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  capabilities: string[];
  timeline?: string;
  clients?: string;
  additionalInfo?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DetailModal = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  capabilities, 
  timeline,
  clients,
  additionalInfo,
  icon: Icon 
}: DetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl">
            <div className="w-12 h-12 bg-pulse-50 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-pulse-500" />
            </div>
            {title}
            {timeline && (
              <span className="text-sm text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full">
                {timeline}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">{description}</p>
          
          {capabilities.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Key Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {clients && (
            <div className="border-t border-gray-100 pt-6">
              <h4 className="font-medium text-gray-900 mb-2">Perfect for:</h4>
              <p className="text-sm text-gray-600">{clients}</p>
            </div>
          )}
          
          {additionalInfo && (
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600">{additionalInfo}</p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="bg-pulse-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-pulse-600 transition-colors duration-300">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;